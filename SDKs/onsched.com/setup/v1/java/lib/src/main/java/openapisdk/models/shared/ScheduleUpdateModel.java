package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScheduleUpdateModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availability")
    public AvailabilityInputModel availability;
    public ScheduleUpdateModel withAvailability(AvailabilityInputModel availability) {
        this.availability = availability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingsPerSlot")
    public Integer bookingsPerSlot;
    public ScheduleUpdateModel withBookingsPerSlot(Integer bookingsPerSlot) {
        this.bookingsPerSlot = bookingsPerSlot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interval")
    public Integer interval;
    public ScheduleUpdateModel withInterval(Integer interval) {
        this.interval = interval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public ScheduleUpdateModel withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ScheduleUpdateModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceGroupId")
    public String resourceGroupId;
    public ScheduleUpdateModel withResourceGroupId(String resourceGroupId) {
        this.resourceGroupId = resourceGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ScheduleUpdateModel withType(String type) {
        this.type = type;
        return this;
    }
}