<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetNetworkSmUserAccessDevices200ApplicationJSONTrustedAccessConnections
{
    /**
     * time that config was downloaded
     * 
     * @var ?string $downloadedAt
     */
	#[\JMS\Serializer\Annotation\SerializedName('downloadedAt')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $downloadedAt = null;
    
    /**
     * time of last connection
     * 
     * @var ?\DateTime $lastConnectedAt
     */
	#[\JMS\Serializer\Annotation\SerializedName('lastConnectedAt')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $lastConnectedAt = null;
    
    /**
     * time that SCEP completed
     * 
     * @var ?\DateTime $scepCompletedAt
     */
	#[\JMS\Serializer\Annotation\SerializedName('scepCompletedAt')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $scepCompletedAt = null;
    
    /**
     * config id
     * 
     * @var ?string $trustedAccessConfigId
     */
	#[\JMS\Serializer\Annotation\SerializedName('trustedAccessConfigId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $trustedAccessConfigId = null;
    
	public function __construct()
	{
		$this->downloadedAt = null;
		$this->lastConnectedAt = null;
		$this->scepCompletedAt = null;
		$this->trustedAccessConfigId = null;
	}
}
