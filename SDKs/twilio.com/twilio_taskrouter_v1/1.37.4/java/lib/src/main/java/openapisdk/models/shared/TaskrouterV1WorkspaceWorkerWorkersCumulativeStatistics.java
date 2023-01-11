package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activity_durations")
    public Object[] activityDurations;
    public TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics withActivityDurations(Object[] activityDurations) {
        this.activityDurations = activityDurations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("end_time")
    public OffsetDateTime endTime;
    public TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservations_accepted")
    public Long reservationsAccepted;
    public TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics withReservationsAccepted(Long reservationsAccepted) {
        this.reservationsAccepted = reservationsAccepted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservations_canceled")
    public Long reservationsCanceled;
    public TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics withReservationsCanceled(Long reservationsCanceled) {
        this.reservationsCanceled = reservationsCanceled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservations_created")
    public Long reservationsCreated;
    public TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics withReservationsCreated(Long reservationsCreated) {
        this.reservationsCreated = reservationsCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservations_rejected")
    public Long reservationsRejected;
    public TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics withReservationsRejected(Long reservationsRejected) {
        this.reservationsRejected = reservationsRejected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservations_rescinded")
    public Long reservationsRescinded;
    public TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics withReservationsRescinded(Long reservationsRescinded) {
        this.reservationsRescinded = reservationsRescinded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservations_timed_out")
    public Long reservationsTimedOut;
    public TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics withReservationsTimedOut(Long reservationsTimedOut) {
        this.reservationsTimedOut = reservationsTimedOut;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start_time")
    public OffsetDateTime startTime;
    public TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace_sid")
    public String workspaceSid;
    public TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}