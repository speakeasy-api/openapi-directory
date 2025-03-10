<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DayAndTimeAssignedTargetingOptionDetails - Representation of a segment of time defined on a specific day of the week and with a start and end time. The time represented by `start_hour` must be before the time represented by `end_hour`.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DayAndTimeAssignedTargetingOptionDetails
{
    /**
     * Required. The day of the week for this day and time targeting setting.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum $dayOfWeek
     */
	#[\JMS\Serializer\Annotation\SerializedName('dayOfWeek')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum $dayOfWeek = null;
    
    /**
     * Required. The end hour for day and time targeting. Must be between 1 (1 hour after start of day) and 24 (end of day).
     * 
     * @var ?int $endHour
     */
	#[\JMS\Serializer\Annotation\SerializedName('endHour')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $endHour = null;
    
    /**
     * Required. The start hour for day and time targeting. Must be between 0 (start of day) and 23 (1 hour before end of day).
     * 
     * @var ?int $startHour
     */
	#[\JMS\Serializer\Annotation\SerializedName('startHour')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $startHour = null;
    
    /**
     * Required. The mechanism used to determine which timezone to use for this day and time targeting setting.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum $timeZoneResolution
     */
	#[\JMS\Serializer\Annotation\SerializedName('timeZoneResolution')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum $timeZoneResolution = null;
    
	public function __construct()
	{
		$this->dayOfWeek = null;
		$this->endHour = null;
		$this->startHour = null;
		$this->timeZoneResolution = null;
	}
}
