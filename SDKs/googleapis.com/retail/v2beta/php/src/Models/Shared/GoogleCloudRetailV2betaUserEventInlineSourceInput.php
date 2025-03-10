<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoogleCloudRetailV2betaUserEventInlineSourceInput - The inline source for the input config for ImportUserEvents method.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoogleCloudRetailV2betaUserEventInlineSourceInput
{
    /**
     * Required. A list of user events to import. Recommended max of 10k items.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaUserEventInput> $userEvents
     */
	#[\JMS\Serializer\Annotation\SerializedName('userEvents')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaUserEventInput>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $userEvents = null;
    
	public function __construct()
	{
		$this->userEvents = null;
	}
}
