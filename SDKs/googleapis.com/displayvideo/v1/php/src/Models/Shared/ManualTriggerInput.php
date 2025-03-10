<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ManualTriggerInput - A single manual trigger in Display & Video 360. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ManualTriggerInput
{
    /**
     * Required. The maximum duration of each activation in minutes. Must be between 1 and 360 inclusive. After this duration, the trigger will be automatically deactivated.
     * 
     * @var ?string $activationDurationMinutes
     */
	#[\JMS\Serializer\Annotation\SerializedName('activationDurationMinutes')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $activationDurationMinutes = null;
    
    /**
     * Required. Immutable. The unique ID of the advertiser that the manual trigger belongs to.
     * 
     * @var ?string $advertiserId
     */
	#[\JMS\Serializer\Annotation\SerializedName('advertiserId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $advertiserId = null;
    
    /**
     * Required. The display name of the manual trigger. Must be UTF-8 encoded with a maximum size of 240 bytes.
     * 
     * @var ?string $displayName
     */
	#[\JMS\Serializer\Annotation\SerializedName('displayName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $displayName = null;
    
	public function __construct()
	{
		$this->activationDurationMinutes = null;
		$this->advertiserId = null;
		$this->displayName = null;
	}
}
