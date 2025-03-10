<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ListPartnerAssignedTargetingOptionsResponse - Successful response
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ListPartnerAssignedTargetingOptionsResponse
{
    /**
     * The list of assigned targeting options. This list will be absent if empty.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\AssignedTargetingOption> $assignedTargetingOptions
     */
	#[\JMS\Serializer\Annotation\SerializedName('assignedTargetingOptions')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\AssignedTargetingOption>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $assignedTargetingOptions = null;
    
    /**
     * A token identifying the next page of results. This value should be specified as the pageToken in a subsequent ListPartnerAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return.
     * 
     * @var ?string $nextPageToken
     */
	#[\JMS\Serializer\Annotation\SerializedName('nextPageToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextPageToken = null;
    
	public function __construct()
	{
		$this->assignedTargetingOptions = null;
		$this->nextPageToken = null;
	}
}
