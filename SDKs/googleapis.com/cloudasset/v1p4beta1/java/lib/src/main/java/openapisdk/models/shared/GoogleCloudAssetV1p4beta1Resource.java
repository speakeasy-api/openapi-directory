package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudAssetV1p4beta1Resource
 * A Google Cloud resource under analysis.
**/
public class GoogleCloudAssetV1p4beta1Resource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analysisState")
    public GoogleCloudAssetV1p4beta1AnalysisState analysisState;
    public GoogleCloudAssetV1p4beta1Resource withAnalysisState(GoogleCloudAssetV1p4beta1AnalysisState analysisState) {
        this.analysisState = analysisState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullResourceName")
    public String fullResourceName;
    public GoogleCloudAssetV1p4beta1Resource withFullResourceName(String fullResourceName) {
        this.fullResourceName = fullResourceName;
        return this;
    }
}