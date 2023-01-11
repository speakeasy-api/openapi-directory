package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportRequest
 * Request message for the Report method.
**/
public class ReportRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operations")
    public AttributeContext[] operations;
    public ReportRequest withOperations(AttributeContext[] operations) {
        this.operations = operations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceConfigId")
    public String serviceConfigId;
    public ReportRequest withServiceConfigId(String serviceConfigId) {
        this.serviceConfigId = serviceConfigId;
        return this;
    }
}