<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ImageProperties - The properties of an image.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ImageProperties
{
    /**
     * The clockwise rotation angle of the image, in radians.
     * 
     * @var ?float $angle
     */
	#[\JMS\Serializer\Annotation\SerializedName('angle')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $angle = null;
    
    /**
     * The brightness effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect.
     * 
     * @var ?float $brightness
     */
	#[\JMS\Serializer\Annotation\SerializedName('brightness')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $brightness = null;
    
    /**
     * A URI to the image with a default lifetime of 30 minutes. This URI is tagged with the account of the requester. Anyone with the URI effectively accesses the image as the original requester. Access to the image may be lost if the document's sharing settings change.
     * 
     * @var ?string $contentUri
     */
	#[\JMS\Serializer\Annotation\SerializedName('contentUri')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $contentUri = null;
    
    /**
     * The contrast effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect.
     * 
     * @var ?float $contrast
     */
	#[\JMS\Serializer\Annotation\SerializedName('contrast')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $contrast = null;
    
    /**
     * The crop properties of an image. The crop rectangle is represented using fractional offsets from the original content's 4 edges. - If the offset is in the interval (0, 1), the corresponding edge of crop rectangle is positioned inside of the image's original bounding rectangle. - If the offset is negative or greater than 1, the corresponding edge of crop rectangle is positioned outside of the image's original bounding rectangle. - If all offsets and rotation angle are 0, the image is not cropped.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CropProperties $cropProperties
     */
	#[\JMS\Serializer\Annotation\SerializedName('cropProperties')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\CropProperties')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CropProperties $cropProperties = null;
    
    /**
     * The source URI is the URI used to insert the image. The source URI can be empty.
     * 
     * @var ?string $sourceUri
     */
	#[\JMS\Serializer\Annotation\SerializedName('sourceUri')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $sourceUri = null;
    
    /**
     * The transparency effect of the image. The value should be in the interval [0.0, 1.0], where 0 means no effect and 1 means transparent.
     * 
     * @var ?float $transparency
     */
	#[\JMS\Serializer\Annotation\SerializedName('transparency')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $transparency = null;
    
	public function __construct()
	{
		$this->angle = null;
		$this->brightness = null;
		$this->contentUri = null;
		$this->contrast = null;
		$this->cropProperties = null;
		$this->sourceUri = null;
		$this->transparency = null;
	}
}
