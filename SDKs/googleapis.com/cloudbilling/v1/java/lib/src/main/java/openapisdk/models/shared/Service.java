package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Service
 * Encapsulates a single service in Google Cloud Platform.
**/
public class Service {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessEntityName")
    public String businessEntityName;
    public Service withBusinessEntityName(String businessEntityName) {
        this.businessEntityName = businessEntityName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Service withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Service withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceId")
    public String serviceId;
    public Service withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}