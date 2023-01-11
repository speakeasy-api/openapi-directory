package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportResponse
 * Response message for the Report method.
**/
public class ReportResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportErrors")
    public ReportError[] reportErrors;
    public ReportResponse withReportErrors(ReportError[] reportErrors) {
        this.reportErrors = reportErrors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceConfigId")
    public String serviceConfigId;
    public ReportResponse withServiceConfigId(String serviceConfigId) {
        this.serviceConfigId = serviceConfigId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceRolloutId")
    public String serviceRolloutId;
    public ReportResponse withServiceRolloutId(String serviceRolloutId) {
        this.serviceRolloutId = serviceRolloutId;
        return this;
    }
}