package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WindowAvailabilityViewModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessName")
    public String businessName;
    public WindowAvailabilityViewModel withBusinessName(String businessName) {
        this.businessName = businessName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectName")
    public String objectName;
    public WindowAvailabilityViewModel withObjectName(String objectName) {
        this.objectName = objectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceDescription")
    public String resourceDescription;
    public WindowAvailabilityViewModel withResourceDescription(String resourceDescription) {
        this.resourceDescription = resourceDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceId")
    public String resourceId;
    public WindowAvailabilityViewModel withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceName")
    public String resourceName;
    public WindowAvailabilityViewModel withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceDescription")
    public String serviceDescription;
    public WindowAvailabilityViewModel withServiceDescription(String serviceDescription) {
        this.serviceDescription = serviceDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceDuration")
    public Integer serviceDuration;
    public WindowAvailabilityViewModel withServiceDuration(Integer serviceDuration) {
        this.serviceDuration = serviceDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceId")
    public String serviceId;
    public WindowAvailabilityViewModel withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceName")
    public String serviceName;
    public WindowAvailabilityViewModel withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tzRequested")
    public Integer tzRequested;
    public WindowAvailabilityViewModel withTzRequested(Integer tzRequested) {
        this.tzRequested = tzRequested;
        return this;
    }
}