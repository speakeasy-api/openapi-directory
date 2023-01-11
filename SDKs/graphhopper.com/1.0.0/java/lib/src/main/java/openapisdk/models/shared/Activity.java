package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Activity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public ResponseAddress address;
    public Activity withAddress(ResponseAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("arr_date_time")
    public OffsetDateTime arrDateTime;
    public Activity withArrDateTime(OffsetDateTime arrDateTime) {
        this.arrDateTime = arrDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arr_time")
    public Long arrTime;
    public Activity withArrTime(Long arrTime) {
        this.arrTime = arrTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distance")
    public Long distance;
    public Activity withDistance(Long distance) {
        this.distance = distance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driving_time")
    public Long drivingTime;
    public Activity withDrivingTime(Long drivingTime) {
        this.drivingTime = drivingTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("end_date_time")
    public OffsetDateTime endDateTime;
    public Activity withEndDateTime(OffsetDateTime endDateTime) {
        this.endDateTime = endDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_time")
    public Long endTime;
    public Activity withEndTime(Long endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Activity withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("load_after")
    public Integer[] loadAfter;
    public Activity withLoadAfter(Integer[] loadAfter) {
        this.loadAfter = loadAfter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("load_before")
    public Integer[] loadBefore;
    public Activity withLoadBefore(Integer[] loadBefore) {
        this.loadBefore = loadBefore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location_id")
    public String locationId;
    public Activity withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preparation_time")
    public Long preparationTime;
    public Activity withPreparationTime(Long preparationTime) {
        this.preparationTime = preparationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ActivityTypeEnum type;
    public Activity withType(ActivityTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waiting_time")
    public Long waitingTime;
    public Activity withWaitingTime(Long waitingTime) {
        this.waitingTime = waitingTime;
        return this;
    }
}