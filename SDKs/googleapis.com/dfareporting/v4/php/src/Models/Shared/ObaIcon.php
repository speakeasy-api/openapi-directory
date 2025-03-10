<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ObaIcon - Online Behavioral Advertiser icon.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ObaIcon
{
    /**
     * URL to redirect to when an OBA icon is clicked.
     * 
     * @var ?string $iconClickThroughUrl
     */
	#[\JMS\Serializer\Annotation\SerializedName('iconClickThroughUrl')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $iconClickThroughUrl = null;
    
    /**
     * URL to track click when an OBA icon is clicked.
     * 
     * @var ?string $iconClickTrackingUrl
     */
	#[\JMS\Serializer\Annotation\SerializedName('iconClickTrackingUrl')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $iconClickTrackingUrl = null;
    
    /**
     * URL to track view when an OBA icon is clicked.
     * 
     * @var ?string $iconViewTrackingUrl
     */
	#[\JMS\Serializer\Annotation\SerializedName('iconViewTrackingUrl')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $iconViewTrackingUrl = null;
    
    /**
     * Identifies the industry initiative that the icon supports. For example, AdChoices.
     * 
     * @var ?string $program
     */
	#[\JMS\Serializer\Annotation\SerializedName('program')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $program = null;
    
    /**
     * OBA icon resource URL. Campaign Manager only supports image and JavaScript icons. Learn more
     * 
     * @var ?string $resourceUrl
     */
	#[\JMS\Serializer\Annotation\SerializedName('resourceUrl')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $resourceUrl = null;
    
    /**
     * Represents the dimensions of ads, placements, creatives, or creative assets.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\Size $size
     */
	#[\JMS\Serializer\Annotation\SerializedName('size')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Size')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Size $size = null;
    
    /**
     * OBA icon x coordinate position. Accepted values are left or right.
     * 
     * @var ?string $xPosition
     */
	#[\JMS\Serializer\Annotation\SerializedName('xPosition')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $xPosition = null;
    
    /**
     * OBA icon y coordinate position. Accepted values are top or bottom.
     * 
     * @var ?string $yPosition
     */
	#[\JMS\Serializer\Annotation\SerializedName('yPosition')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $yPosition = null;
    
	public function __construct()
	{
		$this->iconClickThroughUrl = null;
		$this->iconClickTrackingUrl = null;
		$this->iconViewTrackingUrl = null;
		$this->program = null;
		$this->resourceUrl = null;
		$this->size = null;
		$this->xPosition = null;
		$this->yPosition = null;
	}
}
