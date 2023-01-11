package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudEndpoints
 * Cloud Endpoints service. Learn more at https://cloud.google.com/endpoints.
**/
public class CloudEndpoints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service")
    public String service;
    public CloudEndpoints withService(String service) {
        this.service = service;
        return this;
    }
}