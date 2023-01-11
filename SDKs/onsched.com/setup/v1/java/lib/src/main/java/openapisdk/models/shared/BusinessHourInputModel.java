package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BusinessHourInputModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public Integer endTime;
    public BusinessHourInputModel withEndTime(Integer endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is24Hours")
    public Boolean is24Hours;
    public BusinessHourInputModel withIs24Hours(Boolean is24Hours) {
        this.is24Hours = is24Hours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isOpen")
    public Boolean isOpen;
    public BusinessHourInputModel withIsOpen(Boolean isOpen) {
        this.isOpen = isOpen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public Integer startTime;
    public BusinessHourInputModel withStartTime(Integer startTime) {
        this.startTime = startTime;
        return this;
    }
}