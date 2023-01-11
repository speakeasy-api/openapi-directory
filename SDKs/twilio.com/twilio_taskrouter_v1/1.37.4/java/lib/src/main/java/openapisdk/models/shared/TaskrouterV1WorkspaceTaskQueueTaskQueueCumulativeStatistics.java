package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avg_task_acceptance_time")
    public Long avgTaskAcceptanceTime;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics withAvgTaskAcceptanceTime(Long avgTaskAcceptanceTime) {
        this.avgTaskAcceptanceTime = avgTaskAcceptanceTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("end_time")
    public OffsetDateTime endTime;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservations_accepted")
    public Long reservationsAccepted;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics withReservationsAccepted(Long reservationsAccepted) {
        this.reservationsAccepted = reservationsAccepted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservations_canceled")
    public Long reservationsCanceled;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics withReservationsCanceled(Long reservationsCanceled) {
        this.reservationsCanceled = reservationsCanceled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservations_created")
    public Long reservationsCreated;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics withReservationsCreated(Long reservationsCreated) {
        this.reservationsCreated = reservationsCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservations_rejected")
    public Long reservationsRejected;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics withReservationsRejected(Long reservationsRejected) {
        this.reservationsRejected = reservationsRejected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservations_rescinded")
    public Long reservationsRescinded;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics withReservationsRescinded(Long reservationsRescinded) {
        this.reservationsRescinded = reservationsRescinded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservations_timed_out")
    public Long reservationsTimedOut;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics withReservationsTimedOut(Long reservationsTimedOut) {
        this.reservationsTimedOut = reservationsTimedOut;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("split_by_wait_time")
    public Object splitByWaitTime;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics withSplitByWaitTime(Object splitByWaitTime) {
        this.splitByWaitTime = splitByWaitTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start_time")
    public OffsetDateTime startTime;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("task_queue_sid")
    public String taskQueueSid;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics withTaskQueueSid(String taskQueueSid) {
        this.taskQueueSid = taskQueueSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tasks_canceled")
    public Long tasksCanceled;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics withTasksCanceled(Long tasksCanceled) {
        this.tasksCanceled = tasksCanceled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tasks_completed")
    public Long tasksCompleted;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics withTasksCompleted(Long tasksCompleted) {
        this.tasksCompleted = tasksCompleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tasks_deleted")
    public Long tasksDeleted;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics withTasksDeleted(Long tasksDeleted) {
        this.tasksDeleted = tasksDeleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tasks_entered")
    public Long tasksEntered;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics withTasksEntered(Long tasksEntered) {
        this.tasksEntered = tasksEntered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tasks_moved")
    public Long tasksMoved;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics withTasksMoved(Long tasksMoved) {
        this.tasksMoved = tasksMoved;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wait_duration_in_queue_until_accepted")
    public Object waitDurationInQueueUntilAccepted;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics withWaitDurationInQueueUntilAccepted(Object waitDurationInQueueUntilAccepted) {
        this.waitDurationInQueueUntilAccepted = waitDurationInQueueUntilAccepted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wait_duration_until_accepted")
    public Object waitDurationUntilAccepted;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics withWaitDurationUntilAccepted(Object waitDurationUntilAccepted) {
        this.waitDurationUntilAccepted = waitDurationUntilAccepted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wait_duration_until_canceled")
    public Object waitDurationUntilCanceled;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics withWaitDurationUntilCanceled(Object waitDurationUntilCanceled) {
        this.waitDurationUntilCanceled = waitDurationUntilCanceled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace_sid")
    public String workspaceSid;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}