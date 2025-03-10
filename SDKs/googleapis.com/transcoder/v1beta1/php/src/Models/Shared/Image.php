<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Image - Overlaid jpeg image.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Image
{
    /**
     * Target image opacity. Valid values are from `1.0` (solid, default) to `0.0` (transparent), exclusive. Set this to a value greater than `0.0`.
     * 
     * @var ?float $alpha
     */
	#[\JMS\Serializer\Annotation\SerializedName('alpha')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $alpha = null;
    
    /**
     * 2D normalized coordinates. Default: `{0.0, 0.0}`
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\NormalizedCoordinate $resolution
     */
	#[\JMS\Serializer\Annotation\SerializedName('resolution')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\NormalizedCoordinate')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?NormalizedCoordinate $resolution = null;
    
    /**
     * Required. URI of the JPEG image in Cloud Storage. For example, `gs://bucket/inputs/image.jpeg`. JPEG is the only supported image type.
     * 
     * @var ?string $uri
     */
	#[\JMS\Serializer\Annotation\SerializedName('uri')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $uri = null;
    
	public function __construct()
	{
		$this->alpha = null;
		$this->resolution = null;
		$this->uri = null;
	}
}
