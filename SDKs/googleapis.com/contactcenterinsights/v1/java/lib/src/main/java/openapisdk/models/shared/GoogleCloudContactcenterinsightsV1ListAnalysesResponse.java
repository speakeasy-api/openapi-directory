package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1ListAnalysesResponse
 * The response to list analyses.
**/
public class GoogleCloudContactcenterinsightsV1ListAnalysesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analyses")
    public GoogleCloudContactcenterinsightsV1Analysis[] analyses;
    public GoogleCloudContactcenterinsightsV1ListAnalysesResponse withAnalyses(GoogleCloudContactcenterinsightsV1Analysis[] analyses) {
        this.analyses = analyses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudContactcenterinsightsV1ListAnalysesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}