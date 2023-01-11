package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudRunMetadata
 * CloudRunMetadata contains information from a Cloud Run deployment.
**/
public class CloudRunMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revision")
    public String revision;
    public CloudRunMetadata withRevision(String revision) {
        this.revision = revision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service")
    public String service;
    public CloudRunMetadata withService(String service) {
        this.service = service;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceUrls")
    public String[] serviceUrls;
    public CloudRunMetadata withServiceUrls(String[] serviceUrls) {
        this.serviceUrls = serviceUrls;
        return this;
    }
}