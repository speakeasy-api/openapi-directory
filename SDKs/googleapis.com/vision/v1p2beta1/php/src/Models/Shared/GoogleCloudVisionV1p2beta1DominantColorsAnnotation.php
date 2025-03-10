<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoogleCloudVisionV1p2beta1DominantColorsAnnotation - Set of dominant colors and their corresponding scores.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoogleCloudVisionV1p2beta1DominantColorsAnnotation
{
    /**
     * RGB color values with their score and pixel fraction.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1ColorInfo> $colors
     */
	#[\JMS\Serializer\Annotation\SerializedName('colors')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1ColorInfo>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $colors = null;
    
	public function __construct()
	{
		$this->colors = null;
	}
}
