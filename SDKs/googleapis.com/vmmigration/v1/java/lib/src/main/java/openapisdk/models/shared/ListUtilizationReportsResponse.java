package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListUtilizationReportsResponse
 * Response message for 'ListUtilizationReports' request.
**/
public class ListUtilizationReportsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListUtilizationReportsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListUtilizationReportsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("utilizationReports")
    public UtilizationReport[] utilizationReports;
    public ListUtilizationReportsResponse withUtilizationReports(UtilizationReport[] utilizationReports) {
        this.utilizationReports = utilizationReports;
        return this;
    }
}