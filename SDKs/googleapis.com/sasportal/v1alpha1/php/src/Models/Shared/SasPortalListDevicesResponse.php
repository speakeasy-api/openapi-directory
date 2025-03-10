<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * SasPortalListDevicesResponse - Response for ListDevices.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class SasPortalListDevicesResponse
{
    /**
     * The devices that match the request.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\SasPortalDevice> $devices
     */
	#[\JMS\Serializer\Annotation\SerializedName('devices')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\SasPortalDevice>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $devices = null;
    
    /**
     * A pagination token returned from a previous call to ListDevices that indicates from where listing should continue. If the field is missing or empty, it means there is no more devices.
     * 
     * @var ?string $nextPageToken
     */
	#[\JMS\Serializer\Annotation\SerializedName('nextPageToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextPageToken = null;
    
	public function __construct()
	{
		$this->devices = null;
		$this->nextPageToken = null;
	}
}
