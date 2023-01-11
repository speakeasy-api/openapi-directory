package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ServiceAllocationViewModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingCount")
    public Integer bookingCount;
    public ServiceAllocationViewModel withBookingCount(Integer bookingCount) {
        this.bookingCount = bookingCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingLimit")
    public Integer bookingLimit;
    public ServiceAllocationViewModel withBookingLimit(Integer bookingLimit) {
        this.bookingLimit = bookingLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public String endDate;
    public ServiceAllocationViewModel withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public Integer endTime;
    public ServiceAllocationViewModel withEndTime(Integer endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ServiceAllocationViewModel withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public ServiceAllocationViewModel withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectName")
    public String objectName;
    public ServiceAllocationViewModel withObjectName(String objectName) {
        this.objectName = objectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public ServiceAllocationViewModel withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repeat")
    public RepeatViewModel repeat;
    public ServiceAllocationViewModel withRepeat(RepeatViewModel repeat) {
        this.repeat = repeat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repeats")
    public Boolean repeats;
    public ServiceAllocationViewModel withRepeats(Boolean repeats) {
        this.repeats = repeats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceDescription")
    public String resourceDescription;
    public ServiceAllocationViewModel withResourceDescription(String resourceDescription) {
        this.resourceDescription = resourceDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceId")
    public String resourceId;
    public ServiceAllocationViewModel withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceImageUrl")
    public String resourceImageUrl;
    public ServiceAllocationViewModel withResourceImageUrl(String resourceImageUrl) {
        this.resourceImageUrl = resourceImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceName")
    public String resourceName;
    public ServiceAllocationViewModel withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceDescription")
    public String serviceDescription;
    public ServiceAllocationViewModel withServiceDescription(String serviceDescription) {
        this.serviceDescription = serviceDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceDuration")
    public Integer serviceDuration;
    public ServiceAllocationViewModel withServiceDuration(Integer serviceDuration) {
        this.serviceDuration = serviceDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceId")
    public String serviceId;
    public ServiceAllocationViewModel withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceImageUrl")
    public String serviceImageUrl;
    public ServiceAllocationViewModel withServiceImageUrl(String serviceImageUrl) {
        this.serviceImageUrl = serviceImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceName")
    public String serviceName;
    public ServiceAllocationViewModel withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public String startDate;
    public ServiceAllocationViewModel withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public Integer startTime;
    public ServiceAllocationViewModel withStartTime(Integer startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezoneName")
    public String timezoneName;
    public ServiceAllocationViewModel withTimezoneName(String timezoneName) {
        this.timezoneName = timezoneName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezoneOffset")
    public Integer timezoneOffset;
    public ServiceAllocationViewModel withTimezoneOffset(Integer timezoneOffset) {
        this.timezoneOffset = timezoneOffset;
        return this;
    }
}