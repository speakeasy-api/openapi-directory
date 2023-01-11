package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AvailabilityViewModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessName")
    public String businessName;
    public AvailabilityViewModel withBusinessName(String businessName) {
        this.businessName = businessName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calendarId")
    public String calendarId;
    public AvailabilityViewModel withCalendarId(String calendarId) {
        this.calendarId = calendarId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calendarResourceGroupId")
    public String calendarResourceGroupId;
    public AvailabilityViewModel withCalendarResourceGroupId(String calendarResourceGroupId) {
        this.calendarResourceGroupId = calendarResourceGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public String endDate;
    public AvailabilityViewModel withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstAvailableDate")
    public String firstAvailableDate;
    public AvailabilityViewModel withFirstAvailableDate(String firstAvailableDate) {
        this.firstAvailableDate = firstAvailableDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public AvailabilityViewModel withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectName")
    public String objectName;
    public AvailabilityViewModel withObjectName(String objectName) {
        this.objectName = objectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceDescription")
    public String resourceDescription;
    public AvailabilityViewModel withResourceDescription(String resourceDescription) {
        this.resourceDescription = resourceDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceId")
    public String resourceId;
    public AvailabilityViewModel withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceIds")
    public String resourceIds;
    public AvailabilityViewModel withResourceIds(String resourceIds) {
        this.resourceIds = resourceIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceName")
    public String resourceName;
    public AvailabilityViewModel withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceDescription")
    public String serviceDescription;
    public AvailabilityViewModel withServiceDescription(String serviceDescription) {
        this.serviceDescription = serviceDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceDuration")
    public Integer serviceDuration;
    public AvailabilityViewModel withServiceDuration(Integer serviceDuration) {
        this.serviceDuration = serviceDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceId")
    public String serviceId;
    public AvailabilityViewModel withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceName")
    public String serviceName;
    public AvailabilityViewModel withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public String startDate;
    public AvailabilityViewModel withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tzRequested")
    public Integer tzRequested;
    public AvailabilityViewModel withTzRequested(Integer tzRequested) {
        this.tzRequested = tzRequested;
        return this;
    }
}