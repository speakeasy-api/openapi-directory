<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetServers200ApplicationJSONServersPrivateNet
{
    /**
     * $aliasIps
     * 
     * @var ?array<string> $aliasIps
     */
	#[\JMS\Serializer\Annotation\SerializedName('alias_ips')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $aliasIps = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ip')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $ip = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('mac_address')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $macAddress = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('network')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $network = null;
    
	public function __construct()
	{
		$this->aliasIps = null;
		$this->ip = null;
		$this->macAddress = null;
		$this->network = null;
	}
}
