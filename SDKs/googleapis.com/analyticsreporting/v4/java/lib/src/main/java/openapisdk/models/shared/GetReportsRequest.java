package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetReportsRequest
 * The batch request containing multiple report request.
**/
public class GetReportsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportRequests")
    public ReportRequest[] reportRequests;
    public GetReportsRequest withReportRequests(ReportRequest[] reportRequests) {
        this.reportRequests = reportRequests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useResourceQuotas")
    public Boolean useResourceQuotas;
    public GetReportsRequest withUseResourceQuotas(Boolean useResourceQuotas) {
        this.useResourceQuotas = useResourceQuotas;
        return this;
    }
}