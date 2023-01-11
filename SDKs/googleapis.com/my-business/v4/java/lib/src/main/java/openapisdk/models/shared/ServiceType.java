package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceType
 * A message describing a service type that the business offers.
**/
public class ServiceType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ServiceType withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceTypeId")
    public String serviceTypeId;
    public ServiceType withServiceTypeId(String serviceTypeId) {
        this.serviceTypeId = serviceTypeId;
        return this;
    }
}