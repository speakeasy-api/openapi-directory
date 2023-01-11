package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportInstanceInfoRequest
 * Request for notebook instances to report information to Notebooks API.
**/
public class ReportInstanceInfoRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, String> metadata;
    public ReportInstanceInfoRequest withMetadata(java.util.Map<String, String> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmId")
    public String vmId;
    public ReportInstanceInfoRequest withVmId(String vmId) {
        this.vmId = vmId;
        return this;
    }
}