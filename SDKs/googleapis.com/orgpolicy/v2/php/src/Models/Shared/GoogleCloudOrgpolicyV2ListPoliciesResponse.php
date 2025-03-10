<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoogleCloudOrgpolicyV2ListPoliciesResponse - The response returned from the ListPolicies method. It will be empty if no policies are set on the resource.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoogleCloudOrgpolicyV2ListPoliciesResponse
{
    /**
     * Page token used to retrieve the next page. This is currently not used, but the server may at any point start supplying a valid token.
     * 
     * @var ?string $nextPageToken
     */
	#[\JMS\Serializer\Annotation\SerializedName('nextPageToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextPageToken = null;
    
    /**
     * All policies that exist on the resource. It will be empty if no policies are set.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\GoogleCloudOrgpolicyV2Policy> $policies
     */
	#[\JMS\Serializer\Annotation\SerializedName('policies')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\GoogleCloudOrgpolicyV2Policy>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $policies = null;
    
	public function __construct()
	{
		$this->nextPageToken = null;
		$this->policies = null;
	}
}
