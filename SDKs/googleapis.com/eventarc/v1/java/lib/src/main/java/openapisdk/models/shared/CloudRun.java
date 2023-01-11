package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudRun
 * Represents a Cloud Run destination.
**/
public class CloudRun {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public CloudRun withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public CloudRun withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service")
    public String service;
    public CloudRun withService(String service) {
        this.service = service;
        return this;
    }
}