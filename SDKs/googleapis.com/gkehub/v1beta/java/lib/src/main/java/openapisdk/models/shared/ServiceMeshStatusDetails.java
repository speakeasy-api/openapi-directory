package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceMeshStatusDetails
 * Structured and human-readable details for a status.
**/
public class ServiceMeshStatusDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public ServiceMeshStatusDetails withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public String details;
    public ServiceMeshStatusDetails withDetails(String details) {
        this.details = details;
        return this;
    }
}