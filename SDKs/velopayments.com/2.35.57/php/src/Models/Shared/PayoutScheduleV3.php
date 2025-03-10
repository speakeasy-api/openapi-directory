<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * PayoutScheduleV3 - Details relating to a payout that was executed via a schedule or is still waiting to be executed
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class PayoutScheduleV3
{
	#[\JMS\Serializer\Annotation\SerializedName('notificationsEnabled')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    public bool $notificationsEnabled;
    
    /**
     * The current status of the payout schedule. One of the following values: SCHEDULED, EXECUTED, FAILED
     * 
     * @var string $scheduleStatus
     */
	#[\JMS\Serializer\Annotation\SerializedName('scheduleStatus')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $scheduleStatus;
    
	#[\JMS\Serializer\Annotation\SerializedName('scheduledAt')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    public \DateTime $scheduledAt;
    
    /**
     * ID of the user or application that scheduled the payout
     * 
     * @var string $scheduledByPrincipalId
     */
	#[\JMS\Serializer\Annotation\SerializedName('scheduledByPrincipalId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $scheduledByPrincipalId;
    
	#[\JMS\Serializer\Annotation\SerializedName('scheduledFor')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    public \DateTime $scheduledFor;
    
	public function __construct()
	{
		$this->notificationsEnabled = false;
		$this->scheduleStatus = "";
		$this->scheduledAt = new \DateTime();
		$this->scheduledByPrincipalId = "";
		$this->scheduledFor = new \DateTime();
	}
}
