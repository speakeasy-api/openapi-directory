<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GetCustomerQueryStatsResponse - Successful response
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GetCustomerQueryStatsResponse
{
    /**
     * $stats
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\CustomerQueryStats> $stats
     */
	#[\JMS\Serializer\Annotation\SerializedName('stats')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\CustomerQueryStats>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $stats = null;
    
    /**
     * Total successful query count (status code 200) for the given date range.
     * 
     * @var ?string $totalQueryCount
     */
	#[\JMS\Serializer\Annotation\SerializedName('totalQueryCount')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $totalQueryCount = null;
    
	public function __construct()
	{
		$this->stats = null;
		$this->totalQueryCount = null;
	}
}
