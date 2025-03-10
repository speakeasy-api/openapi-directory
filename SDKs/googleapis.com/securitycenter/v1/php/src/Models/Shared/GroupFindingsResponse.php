<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GroupFindingsResponse - Response message for group by findings.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GroupFindingsResponse
{
    /**
     * Group results. There exists an element for each existing unique combination of property/values. The element contains a count for the number of times those specific property/values appear.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\GroupResult> $groupByResults
     */
	#[\JMS\Serializer\Annotation\SerializedName('groupByResults')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\GroupResult>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $groupByResults = null;
    
    /**
     * Token to retrieve the next page of results, or empty if there are no more results.
     * 
     * @var ?string $nextPageToken
     */
	#[\JMS\Serializer\Annotation\SerializedName('nextPageToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextPageToken = null;
    
    /**
     * Time used for executing the groupBy request.
     * 
     * @var ?string $readTime
     */
	#[\JMS\Serializer\Annotation\SerializedName('readTime')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $readTime = null;
    
    /**
     * The total number of results matching the query.
     * 
     * @var ?int $totalSize
     */
	#[\JMS\Serializer\Annotation\SerializedName('totalSize')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $totalSize = null;
    
	public function __construct()
	{
		$this->groupByResults = null;
		$this->nextPageToken = null;
		$this->readTime = null;
		$this->totalSize = null;
	}
}
