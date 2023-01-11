package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GenerateMediationReportRequest
 * Request to generate an AdMob mediation report.
**/
public class GenerateMediationReportRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportSpec")
    public MediationReportSpec reportSpec;
    public GenerateMediationReportRequest withReportSpec(MediationReportSpec reportSpec) {
        this.reportSpec = reportSpec;
        return this;
    }
}