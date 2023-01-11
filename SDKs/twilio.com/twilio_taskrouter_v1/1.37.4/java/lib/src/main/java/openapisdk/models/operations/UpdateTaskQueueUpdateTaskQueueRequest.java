package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTaskQueueUpdateTaskQueueRequest {
    @SpeakeasyMetadata("form:name=AssignmentActivitySid")
    public String assignmentActivitySid;
    public UpdateTaskQueueUpdateTaskQueueRequest withAssignmentActivitySid(String assignmentActivitySid) {
        this.assignmentActivitySid = assignmentActivitySid;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateTaskQueueUpdateTaskQueueRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=MaxReservedWorkers")
    public Long maxReservedWorkers;
    public UpdateTaskQueueUpdateTaskQueueRequest withMaxReservedWorkers(Long maxReservedWorkers) {
        this.maxReservedWorkers = maxReservedWorkers;
        return this;
    }
    @SpeakeasyMetadata("form:name=ReservationActivitySid")
    public String reservationActivitySid;
    public UpdateTaskQueueUpdateTaskQueueRequest withReservationActivitySid(String reservationActivitySid) {
        this.reservationActivitySid = reservationActivitySid;
        return this;
    }
    @SpeakeasyMetadata("form:name=TargetWorkers")
    public String targetWorkers;
    public UpdateTaskQueueUpdateTaskQueueRequest withTargetWorkers(String targetWorkers) {
        this.targetWorkers = targetWorkers;
        return this;
    }
    @SpeakeasyMetadata("form:name=TaskOrder")
    public openapisdk.models.shared.TaskQueueEnumTaskOrderEnum taskOrder;
    public UpdateTaskQueueUpdateTaskQueueRequest withTaskOrder(openapisdk.models.shared.TaskQueueEnumTaskOrderEnum taskOrder) {
        this.taskOrder = taskOrder;
        return this;
    }
}