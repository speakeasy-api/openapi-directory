package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GenerateNetworkReportRequest
 * Request to generate an AdMob Network report.
**/
public class GenerateNetworkReportRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportSpec")
    public NetworkReportSpec reportSpec;
    public GenerateNetworkReportRequest withReportSpec(NetworkReportSpec reportSpec) {
        this.reportSpec = reportSpec;
        return this;
    }
}