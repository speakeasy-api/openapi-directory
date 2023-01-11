package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTaskQueueCreateTaskQueueRequest {
    @SpeakeasyMetadata("form:name=AssignmentActivitySid")
    public String assignmentActivitySid;
    public CreateTaskQueueCreateTaskQueueRequest withAssignmentActivitySid(String assignmentActivitySid) {
        this.assignmentActivitySid = assignmentActivitySid;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateTaskQueueCreateTaskQueueRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=MaxReservedWorkers")
    public Long maxReservedWorkers;
    public CreateTaskQueueCreateTaskQueueRequest withMaxReservedWorkers(Long maxReservedWorkers) {
        this.maxReservedWorkers = maxReservedWorkers;
        return this;
    }
    @SpeakeasyMetadata("form:name=ReservationActivitySid")
    public String reservationActivitySid;
    public CreateTaskQueueCreateTaskQueueRequest withReservationActivitySid(String reservationActivitySid) {
        this.reservationActivitySid = reservationActivitySid;
        return this;
    }
    @SpeakeasyMetadata("form:name=TargetWorkers")
    public String targetWorkers;
    public CreateTaskQueueCreateTaskQueueRequest withTargetWorkers(String targetWorkers) {
        this.targetWorkers = targetWorkers;
        return this;
    }
    @SpeakeasyMetadata("form:name=TaskOrder")
    public openapisdk.models.shared.TaskQueueEnumTaskOrderEnum taskOrder;
    public CreateTaskQueueCreateTaskQueueRequest withTaskOrder(openapisdk.models.shared.TaskQueueEnumTaskOrderEnum taskOrder) {
        this.taskOrder = taskOrder;
        return this;
    }
}