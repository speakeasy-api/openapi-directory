package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class V3Departure {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("at_platform")
    public Boolean atPlatform;
    public V3Departure withAtPlatform(Boolean atPlatform) {
        this.atPlatform = atPlatform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("departure_sequence")
    public Integer departureSequence;
    public V3Departure withDepartureSequence(Integer departureSequence) {
        this.departureSequence = departureSequence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction_id")
    public Integer directionId;
    public V3Departure withDirectionId(Integer directionId) {
        this.directionId = directionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disruption_ids")
    public Long[] disruptionIds;
    public V3Departure withDisruptionIds(Long[] disruptionIds) {
        this.disruptionIds = disruptionIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("estimated_departure_utc")
    public OffsetDateTime estimatedDepartureUtc;
    public V3Departure withEstimatedDepartureUtc(OffsetDateTime estimatedDepartureUtc) {
        this.estimatedDepartureUtc = estimatedDepartureUtc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flags")
    public String flags;
    public V3Departure withFlags(String flags) {
        this.flags = flags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform_number")
    public String platformNumber;
    public V3Departure withPlatformNumber(String platformNumber) {
        this.platformNumber = platformNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("route_id")
    public Integer routeId;
    public V3Departure withRouteId(Integer routeId) {
        this.routeId = routeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("run_id")
    public Integer runId;
    public V3Departure withRunId(Integer runId) {
        this.runId = runId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("run_ref")
    public String runRef;
    public V3Departure withRunRef(String runRef) {
        this.runRef = runRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("scheduled_departure_utc")
    public OffsetDateTime scheduledDepartureUtc;
    public V3Departure withScheduledDepartureUtc(OffsetDateTime scheduledDepartureUtc) {
        this.scheduledDepartureUtc = scheduledDepartureUtc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_id")
    public Integer stopId;
    public V3Departure withStopId(Integer stopId) {
        this.stopId = stopId;
        return this;
    }
}