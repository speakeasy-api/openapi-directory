package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingWindowViewModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromTime")
    public Integer fromTime;
    public BookingWindowViewModel withFromTime(Integer fromTime) {
        this.fromTime = fromTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public BookingWindowViewModel withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxBookings")
    public Integer maxBookings;
    public BookingWindowViewModel withMaxBookings(Integer maxBookings) {
        this.maxBookings = maxBookings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectName")
    public String objectName;
    public BookingWindowViewModel withObjectName(String objectName) {
        this.objectName = objectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceId")
    public String serviceId;
    public BookingWindowViewModel withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toTime")
    public Integer toTime;
    public BookingWindowViewModel withToTime(Integer toTime) {
        this.toTime = toTime;
        return this;
    }
}