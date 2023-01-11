package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudRunService
 * Represents a Cloud Run service destination.
**/
public class CloudRunService {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public CloudRunService withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public CloudRunService withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service")
    public String service;
    public CloudRunService withService(String service) {
        this.service = service;
        return this;
    }
}