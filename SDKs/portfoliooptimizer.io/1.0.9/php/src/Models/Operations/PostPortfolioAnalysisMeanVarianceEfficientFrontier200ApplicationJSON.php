<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJSON - OK
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJSON
{
    /**
     * $portfolios
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJSONPortfolios> $portfolios
     */
	#[\JMS\Serializer\Annotation\SerializedName('portfolios')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJSONPortfolios>')]
    public array $portfolios;
    
	public function __construct()
	{
		$this->portfolios = [];
	}
}
