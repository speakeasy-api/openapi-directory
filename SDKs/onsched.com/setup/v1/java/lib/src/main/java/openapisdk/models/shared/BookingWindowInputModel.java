package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingWindowInputModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromTime")
    public Integer fromTime;
    public BookingWindowInputModel withFromTime(Integer fromTime) {
        this.fromTime = fromTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxBookings")
    public Integer maxBookings;
    public BookingWindowInputModel withMaxBookings(Integer maxBookings) {
        this.maxBookings = maxBookings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceId")
    public String serviceId;
    public BookingWindowInputModel withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toTime")
    public Integer toTime;
    public BookingWindowInputModel withToTime(Integer toTime) {
        this.toTime = toTime;
        return this;
    }
}