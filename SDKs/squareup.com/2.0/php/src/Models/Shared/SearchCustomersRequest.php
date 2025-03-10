<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * SearchCustomersRequest - Defines the fields that are included in the request body of a request to the
 * 
 * `SearchCustomers` endpoint.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class SearchCustomersRequest
{
    /**
     * Include the pagination cursor in subsequent calls to this endpoint to retrieve
     * 
     * the next set of results associated with the original query.
     * 
     * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     * 
     * @var ?string $cursor
     */
	#[\JMS\Serializer\Annotation\SerializedName('cursor')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $cursor = null;
    
    /**
     * The maximum number of results to return in a single page. This limit is advisory. The response might contain more or fewer results. 
     * 
     * The limit is ignored if it is less than the minimum or greater than the maximum value. The default value is 100.
     * 
     * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     * 
     * @var ?int $limit
     */
	#[\JMS\Serializer\Annotation\SerializedName('limit')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $limit = null;
    
    /**
     * Represents a query (including filtering criteria, sorting criteria, or both) used to search
     * 
     * for customer profiles.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CustomerQuery $query
     */
	#[\JMS\Serializer\Annotation\SerializedName('query')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\CustomerQuery')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CustomerQuery $query = null;
    
	public function __construct()
	{
		$this->cursor = null;
		$this->limit = null;
		$this->query = null;
	}
}
