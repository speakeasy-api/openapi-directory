package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApiServiceOut
 * List of API Services
**/
public class ApiServiceOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costInUnits")
    public Integer costInUnits;
    public ApiServiceOut withCostInUnits(Integer costInUnits) {
        this.costInUnits = costInUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceGroup")
    public String serviceGroup;
    public ApiServiceOut withServiceGroup(String serviceGroup) {
        this.serviceGroup = serviceGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceName")
    public String serviceName;
    public ApiServiceOut withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}