<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoogleAppsCardV1CardHeader - Represents a card header.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoogleAppsCardV1CardHeader
{
    /**
     * The alternative text of this image which is used for accessibility.
     * 
     * @var ?string $imageAltText
     */
	#[\JMS\Serializer\Annotation\SerializedName('imageAltText')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $imageAltText = null;
    
    /**
     * The shape used to crop the image.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1CardHeaderImageTypeEnum $imageType
     */
	#[\JMS\Serializer\Annotation\SerializedName('imageType')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1CardHeaderImageTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleAppsCardV1CardHeaderImageTypeEnum $imageType = null;
    
    /**
     * The HTTPS URL of the image in the card header.
     * 
     * @var ?string $imageUrl
     */
	#[\JMS\Serializer\Annotation\SerializedName('imageUrl')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $imageUrl = null;
    
    /**
     * The subtitle of the card header. If specified, appears on its own line below the `title`.
     * 
     * @var ?string $subtitle
     */
	#[\JMS\Serializer\Annotation\SerializedName('subtitle')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $subtitle = null;
    
    /**
     * Required. The title of the card header. The header has a fixed height: if both a title and subtitle are specified, each takes up one line. If only the title is specified, it takes up both lines.
     * 
     * @var ?string $title
     */
	#[\JMS\Serializer\Annotation\SerializedName('title')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $title = null;
    
	public function __construct()
	{
		$this->imageAltText = null;
		$this->imageType = null;
		$this->imageUrl = null;
		$this->subtitle = null;
		$this->title = null;
	}
}
