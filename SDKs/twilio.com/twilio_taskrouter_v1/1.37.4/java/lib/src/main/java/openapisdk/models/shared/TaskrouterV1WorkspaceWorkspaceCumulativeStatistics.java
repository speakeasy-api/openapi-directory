package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class TaskrouterV1WorkspaceWorkspaceCumulativeStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public TaskrouterV1WorkspaceWorkspaceCumulativeStatistics withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avg_task_acceptance_time")
    public Long avgTaskAcceptanceTime;
    public TaskrouterV1WorkspaceWorkspaceCumulativeStatistics withAvgTaskAcceptanceTime(Long avgTaskAcceptanceTime) {
        this.avgTaskAcceptanceTime = avgTaskAcceptanceTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("end_time")
    public OffsetDateTime endTime;
    public TaskrouterV1WorkspaceWorkspaceCumulativeStatistics withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservations_accepted")
    public Long reservationsAccepted;
    public TaskrouterV1WorkspaceWorkspaceCumulativeStatistics withReservationsAccepted(Long reservationsAccepted) {
        this.reservationsAccepted = reservationsAccepted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservations_canceled")
    public Long reservationsCanceled;
    public TaskrouterV1WorkspaceWorkspaceCumulativeStatistics withReservationsCanceled(Long reservationsCanceled) {
        this.reservationsCanceled = reservationsCanceled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservations_created")
    public Long reservationsCreated;
    public TaskrouterV1WorkspaceWorkspaceCumulativeStatistics withReservationsCreated(Long reservationsCreated) {
        this.reservationsCreated = reservationsCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservations_rejected")
    public Long reservationsRejected;
    public TaskrouterV1WorkspaceWorkspaceCumulativeStatistics withReservationsRejected(Long reservationsRejected) {
        this.reservationsRejected = reservationsRejected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservations_rescinded")
    public Long reservationsRescinded;
    public TaskrouterV1WorkspaceWorkspaceCumulativeStatistics withReservationsRescinded(Long reservationsRescinded) {
        this.reservationsRescinded = reservationsRescinded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservations_timed_out")
    public Long reservationsTimedOut;
    public TaskrouterV1WorkspaceWorkspaceCumulativeStatistics withReservationsTimedOut(Long reservationsTimedOut) {
        this.reservationsTimedOut = reservationsTimedOut;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("split_by_wait_time")
    public Object splitByWaitTime;
    public TaskrouterV1WorkspaceWorkspaceCumulativeStatistics withSplitByWaitTime(Object splitByWaitTime) {
        this.splitByWaitTime = splitByWaitTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start_time")
    public OffsetDateTime startTime;
    public TaskrouterV1WorkspaceWorkspaceCumulativeStatistics withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tasks_canceled")
    public Long tasksCanceled;
    public TaskrouterV1WorkspaceWorkspaceCumulativeStatistics withTasksCanceled(Long tasksCanceled) {
        this.tasksCanceled = tasksCanceled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tasks_completed")
    public Long tasksCompleted;
    public TaskrouterV1WorkspaceWorkspaceCumulativeStatistics withTasksCompleted(Long tasksCompleted) {
        this.tasksCompleted = tasksCompleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tasks_created")
    public Long tasksCreated;
    public TaskrouterV1WorkspaceWorkspaceCumulativeStatistics withTasksCreated(Long tasksCreated) {
        this.tasksCreated = tasksCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tasks_deleted")
    public Long tasksDeleted;
    public TaskrouterV1WorkspaceWorkspaceCumulativeStatistics withTasksDeleted(Long tasksDeleted) {
        this.tasksDeleted = tasksDeleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tasks_moved")
    public Long tasksMoved;
    public TaskrouterV1WorkspaceWorkspaceCumulativeStatistics withTasksMoved(Long tasksMoved) {
        this.tasksMoved = tasksMoved;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tasks_timed_out_in_workflow")
    public Long tasksTimedOutInWorkflow;
    public TaskrouterV1WorkspaceWorkspaceCumulativeStatistics withTasksTimedOutInWorkflow(Long tasksTimedOutInWorkflow) {
        this.tasksTimedOutInWorkflow = tasksTimedOutInWorkflow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public TaskrouterV1WorkspaceWorkspaceCumulativeStatistics withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wait_duration_until_accepted")
    public Object waitDurationUntilAccepted;
    public TaskrouterV1WorkspaceWorkspaceCumulativeStatistics withWaitDurationUntilAccepted(Object waitDurationUntilAccepted) {
        this.waitDurationUntilAccepted = waitDurationUntilAccepted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wait_duration_until_canceled")
    public Object waitDurationUntilCanceled;
    public TaskrouterV1WorkspaceWorkspaceCumulativeStatistics withWaitDurationUntilCanceled(Object waitDurationUntilCanceled) {
        this.waitDurationUntilCanceled = waitDurationUntilCanceled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace_sid")
    public String workspaceSid;
    public TaskrouterV1WorkspaceWorkspaceCumulativeStatistics withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}