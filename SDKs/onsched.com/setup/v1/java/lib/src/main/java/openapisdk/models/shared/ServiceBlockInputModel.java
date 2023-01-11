package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ServiceBlockInputModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endDate")
    public OffsetDateTime endDate;
    public ServiceBlockInputModel withEndDate(OffsetDateTime endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public Integer endTime;
    public ServiceBlockInputModel withEndTime(Integer endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public ServiceBlockInputModel withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public ServiceBlockInputModel withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repeat")
    public RepeatInputModel repeat;
    public ServiceBlockInputModel withRepeat(RepeatInputModel repeat) {
        this.repeat = repeat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repeats")
    public Boolean repeats;
    public ServiceBlockInputModel withRepeats(Boolean repeats) {
        this.repeats = repeats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startDate")
    public OffsetDateTime startDate;
    public ServiceBlockInputModel withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public Integer startTime;
    public ServiceBlockInputModel withStartTime(Integer startTime) {
        this.startTime = startTime;
        return this;
    }
}