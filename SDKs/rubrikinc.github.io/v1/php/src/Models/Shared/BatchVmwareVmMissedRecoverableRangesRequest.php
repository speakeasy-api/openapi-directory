<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * BatchVmwareVmMissedRecoverableRangesRequest - The batch request and the date ranges (optional) as a filter. The batch request includes the ID of each CDP-enabled virtual machine for which missed recoverable ranges are being retrieved.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class BatchVmwareVmMissedRecoverableRangesRequest
{
    /**
     * Query filter - only ranges that occur after this time are included. The date-time string should be in ISO8601 format. For example, `2018-01-01T01:23:45.678Z`.
     * 
     * @var ?\DateTime $afterTime
     */
	#[\JMS\Serializer\Annotation\SerializedName('after_time')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $afterTime = null;
    
    /**
     * Query filter - only ranges that occur before this time are included. The date-time string should be in ISO8601 format. For example, `2018-01-01T01:23:45.678Z`.
     * 
     * @var ?\DateTime $beforeTime
     */
	#[\JMS\Serializer\Annotation\SerializedName('before_time')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $beforeTime = null;
    
    /**
     * ID of each CDP-enabled virtual machine for which missed recoverable ranges are being retrieved.
     * 
     * @var array<string> $vmIds
     */
	#[\JMS\Serializer\Annotation\SerializedName('vmIds')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    public array $vmIds;
    
	public function __construct()
	{
		$this->afterTime = null;
		$this->beforeTime = null;
		$this->vmIds = [];
	}
}
