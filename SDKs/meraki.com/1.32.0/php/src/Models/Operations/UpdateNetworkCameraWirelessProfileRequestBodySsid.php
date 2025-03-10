<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * UpdateNetworkCameraWirelessProfileRequestBodySsid - The details of the SSID config.
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class UpdateNetworkCameraWirelessProfileRequestBodySsid
{
    /**
     * The auth mode of the SSID. It can be set to ('psk', '8021x-radius').
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum $authMode
     */
	#[\JMS\Serializer\Annotation\SerializedName('authMode')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum $authMode = null;
    
    /**
     * The encryption mode of the SSID. It can be set to ('wpa', 'wpa-eap'). With 'wpa' mode, the authMode should be 'psk' and with 'wpa-eap' the authMode should be '8021x-radius'
     * 
     * @var ?string $encryptionMode
     */
	#[\JMS\Serializer\Annotation\SerializedName('encryptionMode')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $encryptionMode = null;
    
    /**
     * The name of the SSID.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * The pre-shared key of the SSID.
     * 
     * @var ?string $psk
     */
	#[\JMS\Serializer\Annotation\SerializedName('psk')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $psk = null;
    
	public function __construct()
	{
		$this->authMode = null;
		$this->encryptionMode = null;
		$this->name = null;
		$this->psk = null;
	}
}
