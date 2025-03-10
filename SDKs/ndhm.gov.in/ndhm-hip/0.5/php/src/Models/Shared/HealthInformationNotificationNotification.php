<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class HealthInformationNotificationNotification
{
	#[\JMS\Serializer\Annotation\SerializedName('consentId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $consentId;
    
	#[\JMS\Serializer\Annotation\SerializedName('doneAt')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    public \DateTime $doneAt;
    
	#[\JMS\Serializer\Annotation\SerializedName('notifier')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\HealthInformationNotificationNotificationNotifier')]
    public HealthInformationNotificationNotificationNotifier $notifier;
    
	#[\JMS\Serializer\Annotation\SerializedName('statusNotification')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\HealthInformationNotificationNotificationStatusNotification')]
    public HealthInformationNotificationNotificationStatusNotification $statusNotification;
    
	#[\JMS\Serializer\Annotation\SerializedName('transactionId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $transactionId;
    
	public function __construct()
	{
		$this->consentId = "";
		$this->doneAt = new \DateTime();
		$this->notifier = new \OpenAPI\OpenAPI\Models\Shared\HealthInformationNotificationNotificationNotifier();
		$this->statusNotification = new \OpenAPI\OpenAPI\Models\Shared\HealthInformationNotificationNotificationStatusNotification();
		$this->transactionId = "";
	}
}
