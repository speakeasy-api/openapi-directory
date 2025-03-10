<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class UpdateNetworkSensorAlertsProfileRequestBody
{
    /**
     * List of conditions that will cause the profile to send an alert.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditions> $conditions
     */
	#[\JMS\Serializer\Annotation\SerializedName('conditions')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditions>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $conditions = null;
    
    /**
     * Name of the sensor alert profile.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * List of recipients that will recieve the alert.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyRecipients $recipients
     */
	#[\JMS\Serializer\Annotation\SerializedName('recipients')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyRecipients')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?UpdateNetworkSensorAlertsProfileRequestBodyRecipients $recipients = null;
    
    /**
     * The sensor schedule to use with the alert profile.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodySchedule $schedule
     */
	#[\JMS\Serializer\Annotation\SerializedName('schedule')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodySchedule')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?UpdateNetworkSensorAlertsProfileRequestBodySchedule $schedule = null;
    
    /**
     * List of device serials assigned to this sensor alert profile.
     * 
     * @var ?array<string> $serials
     */
	#[\JMS\Serializer\Annotation\SerializedName('serials')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $serials = null;
    
	public function __construct()
	{
		$this->conditions = null;
		$this->name = null;
		$this->recipients = null;
		$this->schedule = null;
		$this->serials = null;
	}
}
