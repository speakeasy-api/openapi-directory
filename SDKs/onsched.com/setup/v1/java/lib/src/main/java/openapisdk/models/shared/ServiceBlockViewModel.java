package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ServiceBlockViewModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deletedStatus")
    public Boolean deletedStatus;
    public ServiceBlockViewModel withDeletedStatus(Boolean deletedStatus) {
        this.deletedStatus = deletedStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deletedTime")
    public String deletedTime;
    public ServiceBlockViewModel withDeletedTime(String deletedTime) {
        this.deletedTime = deletedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endDate")
    public OffsetDateTime endDate;
    public ServiceBlockViewModel withEndDate(OffsetDateTime endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public Integer endTime;
    public ServiceBlockViewModel withEndTime(Integer endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ServiceBlockViewModel withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public ServiceBlockViewModel withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectName")
    public String objectName;
    public ServiceBlockViewModel withObjectName(String objectName) {
        this.objectName = objectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public ServiceBlockViewModel withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repeat")
    public RepeatViewModel repeat;
    public ServiceBlockViewModel withRepeat(RepeatViewModel repeat) {
        this.repeat = repeat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repeats")
    public Boolean repeats;
    public ServiceBlockViewModel withRepeats(Boolean repeats) {
        this.repeats = repeats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceId")
    public String serviceId;
    public ServiceBlockViewModel withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startDate")
    public OffsetDateTime startDate;
    public ServiceBlockViewModel withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public Integer startTime;
    public ServiceBlockViewModel withStartTime(Integer startTime) {
        this.startTime = startTime;
        return this;
    }
}