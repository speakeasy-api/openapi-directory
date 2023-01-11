package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Availability3ViewModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessName")
    public String businessName;
    public Availability3ViewModel withBusinessName(String businessName) {
        this.businessName = businessName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstAvailableDate")
    public String firstAvailableDate;
    public Availability3ViewModel withFirstAvailableDate(String firstAvailableDate) {
        this.firstAvailableDate = firstAvailableDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectName")
    public String objectName;
    public Availability3ViewModel withObjectName(String objectName) {
        this.objectName = objectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceDescription")
    public String resourceDescription;
    public Availability3ViewModel withResourceDescription(String resourceDescription) {
        this.resourceDescription = resourceDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceId")
    public String resourceId;
    public Availability3ViewModel withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceIds")
    public String resourceIds;
    public Availability3ViewModel withResourceIds(String resourceIds) {
        this.resourceIds = resourceIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceName")
    public String resourceName;
    public Availability3ViewModel withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceDescription")
    public String serviceDescription;
    public Availability3ViewModel withServiceDescription(String serviceDescription) {
        this.serviceDescription = serviceDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceDuration")
    public Integer serviceDuration;
    public Availability3ViewModel withServiceDuration(Integer serviceDuration) {
        this.serviceDuration = serviceDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceId")
    public String serviceId;
    public Availability3ViewModel withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceName")
    public String serviceName;
    public Availability3ViewModel withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tzRequested")
    public Integer tzRequested;
    public Availability3ViewModel withTzRequested(Integer tzRequested) {
        this.tzRequested = tzRequested;
        return this;
    }
}