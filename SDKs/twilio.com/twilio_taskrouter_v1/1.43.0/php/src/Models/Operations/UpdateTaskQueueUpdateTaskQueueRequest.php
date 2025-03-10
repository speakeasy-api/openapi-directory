<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class UpdateTaskQueueUpdateTaskQueueRequest
{
    /**
     * The SID of the Activity to assign Workers when a task is assigned for them.
     * 
     * @var ?string $assignmentActivitySid
     */
	#[SpeakeasyMetadata('form:name=AssignmentActivitySid')]
    public ?string $assignmentActivitySid = null;
    
    /**
     * A descriptive string that you create to describe the TaskQueue. For example `Support-Tier 1`, `Sales`, or `Escalation`.
     * 
     * @var ?string $friendlyName
     */
	#[SpeakeasyMetadata('form:name=FriendlyName')]
    public ?string $friendlyName = null;
    
    /**
     * The maximum number of Workers to create reservations for the assignment of a task while in the queue. Maximum of 50.
     * 
     * @var ?int $maxReservedWorkers
     */
	#[SpeakeasyMetadata('form:name=MaxReservedWorkers')]
    public ?int $maxReservedWorkers = null;
    
    /**
     * The SID of the Activity to assign Workers when a task is reserved for them.
     * 
     * @var ?string $reservationActivitySid
     */
	#[SpeakeasyMetadata('form:name=ReservationActivitySid')]
    public ?string $reservationActivitySid = null;
    
    /**
     * A string describing the Worker selection criteria for any Tasks that enter the TaskQueue. For example '"language" == "spanish"' If no TargetWorkers parameter is provided, Tasks will wait in the queue until they are either deleted or moved to another queue. Additional examples on how to describing Worker selection criteria below.
     * 
     * @var ?string $targetWorkers
     */
	#[SpeakeasyMetadata('form:name=TargetWorkers')]
    public ?string $targetWorkers = null;
    
	#[SpeakeasyMetadata('form:name=TaskOrder')]
    public ?\OpenAPI\OpenAPI\Models\Shared\TaskQueueEnumTaskOrderEnum $taskOrder = null;
    
	public function __construct()
	{
		$this->assignmentActivitySid = null;
		$this->friendlyName = null;
		$this->maxReservedWorkers = null;
		$this->reservationActivitySid = null;
		$this->targetWorkers = null;
		$this->taskOrder = null;
	}
}
