package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ServiceInputModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availability")
    public AvailabilityInputModel availability;
    public ServiceInputModel withAvailability(AvailabilityInputModel availability) {
        this.availability = availability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingInterval")
    public Integer bookingInterval;
    public ServiceInputModel withBookingInterval(Integer bookingInterval) {
        this.bookingInterval = bookingInterval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingLimit")
    public Integer bookingLimit;
    public ServiceInputModel withBookingLimit(Integer bookingLimit) {
        this.bookingLimit = bookingLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ServiceInputModel withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Integer duration;
    public ServiceInputModel withDuration(Integer duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fees")
    public ServiceFeesInputModel fees;
    public ServiceInputModel withFees(ServiceFeesInputModel fees) {
        this.fees = fees;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public ServiceInputModel withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxCapacity")
    public Integer maxCapacity;
    public ServiceInputModel withMaxCapacity(Integer maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxGroupSize")
    public Integer maxGroupSize;
    public ServiceInputModel withMaxGroupSize(Integer maxGroupSize) {
        this.maxGroupSize = maxGroupSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediaPageUrl")
    public String mediaPageUrl;
    public ServiceInputModel withMediaPageUrl(String mediaPageUrl) {
        this.mediaPageUrl = mediaPageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ServiceInputModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public ServiceOptionsInputModel options;
    public ServiceInputModel withOptions(ServiceOptionsInputModel options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public")
    public Boolean public_;
    public ServiceInputModel withPublic(Boolean public_) {
        this.public_ = public_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceGroupId")
    public String serviceGroupId;
    public ServiceInputModel withServiceGroupId(String serviceGroupId) {
        this.serviceGroupId = serviceGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public ServiceSettingsInputModel settings;
    public ServiceInputModel withSettings(ServiceSettingsInputModel settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ServiceInputModel withType(String type) {
        this.type = type;
        return this;
    }
}