<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoogleCloudRetailV2alphaListProductsResponse - Response message for ProductService.ListProducts method.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoogleCloudRetailV2alphaListProductsResponse
{
    /**
     * A token that can be sent as ListProductsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
     * 
     * @var ?string $nextPageToken
     */
	#[\JMS\Serializer\Annotation\SerializedName('nextPageToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextPageToken = null;
    
    /**
     * The Products.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaProduct> $products
     */
	#[\JMS\Serializer\Annotation\SerializedName('products')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaProduct>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $products = null;
    
    /**
     * The total count of matched Products irrespective of pagination. The total number of Products returned by pagination may be less than the total_size that matches. This field is ignored if ListProductsRequest.require_total_size is not set or ListProductsRequest.page_token is not empty.
     * 
     * @var ?int $totalSize
     */
	#[\JMS\Serializer\Annotation\SerializedName('totalSize')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $totalSize = null;
    
	public function __construct()
	{
		$this->nextPageToken = null;
		$this->products = null;
		$this->totalSize = null;
	}
}
