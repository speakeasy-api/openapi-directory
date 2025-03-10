<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess - Details associated with a free access plan with limits.
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess
{
    /**
     * How long a device can use a network for free.
     * 
     * @var ?int $durationInMinutes
     */
	#[\JMS\Serializer\Annotation\SerializedName('durationInMinutes')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $durationInMinutes = null;
    
    /**
     * Whether or not free access is enabled.
     * 
     * @var ?bool $enabled
     */
	#[\JMS\Serializer\Annotation\SerializedName('enabled')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $enabled = null;
    
	public function __construct()
	{
		$this->durationInMinutes = null;
		$this->enabled = null;
	}
}
