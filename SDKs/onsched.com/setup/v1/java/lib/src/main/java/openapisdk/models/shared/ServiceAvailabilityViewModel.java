package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

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
}