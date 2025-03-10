<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class CreateNetworkSwitchAccessPolicy201ApplicationJSONRadiusServers
{
    /**
     * Public IP address of the RADIUS server
     * 
     * @var ?string $host
     */
	#[\JMS\Serializer\Annotation\SerializedName('host')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $host = null;
    
    /**
     * UDP port that the RADIUS server listens on for access requests
     * 
     * @var ?int $port
     */
	#[\JMS\Serializer\Annotation\SerializedName('port')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $port = null;
    
	public function __construct()
	{
		$this->host = null;
		$this->port = null;
	}
}
