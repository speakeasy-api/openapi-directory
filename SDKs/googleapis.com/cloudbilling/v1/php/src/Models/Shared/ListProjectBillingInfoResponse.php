<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ListProjectBillingInfoResponse - Request message for `ListProjectBillingInfoResponse`.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ListProjectBillingInfoResponse
{
    /**
     * A token to retrieve the next page of results. To retrieve the next page, call `ListProjectBillingInfo` again with the `page_token` field set to this value. This field is empty if there are no more results to retrieve.
     * 
     * @var ?string $nextPageToken
     */
	#[\JMS\Serializer\Annotation\SerializedName('nextPageToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextPageToken = null;
    
    /**
     * A list of `ProjectBillingInfo` resources representing the projects associated with the billing account.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ProjectBillingInfo> $projectBillingInfo
     */
	#[\JMS\Serializer\Annotation\SerializedName('projectBillingInfo')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ProjectBillingInfo>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $projectBillingInfo = null;
    
	public function __construct()
	{
		$this->nextPageToken = null;
		$this->projectBillingInfo = null;
	}
}
