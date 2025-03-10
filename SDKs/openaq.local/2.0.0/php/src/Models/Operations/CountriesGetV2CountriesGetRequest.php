<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class CountriesGetV2CountriesGetRequest
{
    /**
     * 
     *         Limit results by a certain country using two letter country code.
     *         (ex. ?country=US or ?country=US&country=MX)
     *         
     * 
     * @var ?array<string> $country
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=country')]
    public ?array $country = null;
    
    /**
     * 
     *         Limit results by a certain country using two letter country code.
     *         (ex. /US)
     *         
     * 
     * @var ?string $countryId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=country_id')]
    public ?string $countryId = null;
    
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=limit')]
    public ?int $limit = null;
    
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=offset')]
    public ?int $offset = null;
    
    /**
     * An enumeration.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\CountriesGetV2CountriesGetOrderByCountriesOrderEnum $orderBy
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=order_by')]
    public ?CountriesGetV2CountriesGetOrderByCountriesOrderEnum $orderBy = null;
    
    /**
     * Paginate through results.
     * 
     * @var ?int $page
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=page')]
    public ?int $page = null;
    
    /**
     * Define sort order.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\CountriesGetV2CountriesGetSortSortEnum $sort
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=sort')]
    public ?CountriesGetV2CountriesGetSortSortEnum $sort = null;
    
	public function __construct()
	{
		$this->country = null;
		$this->countryId = null;
		$this->limit = null;
		$this->offset = null;
		$this->orderBy = null;
		$this->page = null;
		$this->sort = null;
	}
}
