/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ServiceAvailabilityViewModel - Success
 */
public class ServiceAvailabilityViewModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ignoreBusinessHours")
    public Boolean ignoreBusinessHours;

    public ServiceAvailabilityViewModel withIgnoreBusinessHours(Boolean ignoreBusinessHours) {
        this.ignoreBusinessHours = ignoreBusinessHours;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceId")
    public Integer serviceId;

    public ServiceAvailabilityViewModel withServiceId(Integer serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceName")
    public String serviceName;

    public ServiceAvailabilityViewModel withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weekdays")
    public AvailabilityViewModel2 weekdays;

    public ServiceAvailabilityViewModel withWeekdays(AvailabilityViewModel2 weekdays) {
        this.weekdays = weekdays;
        return this;
    }
    
    public ServiceAvailabilityViewModel(){}
}
