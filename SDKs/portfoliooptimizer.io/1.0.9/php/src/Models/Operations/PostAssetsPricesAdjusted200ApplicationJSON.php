<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * PostAssetsPricesAdjusted200ApplicationJSON - OK
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class PostAssetsPricesAdjusted200ApplicationJSON
{
    /**
     * $assets
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Operations\PostAssetsPricesAdjusted200ApplicationJSONAssets> $assets
     */
	#[\JMS\Serializer\Annotation\SerializedName('assets')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Operations\PostAssetsPricesAdjusted200ApplicationJSONAssets>')]
    public array $assets;
    
	public function __construct()
	{
		$this->assets = [];
	}
}
