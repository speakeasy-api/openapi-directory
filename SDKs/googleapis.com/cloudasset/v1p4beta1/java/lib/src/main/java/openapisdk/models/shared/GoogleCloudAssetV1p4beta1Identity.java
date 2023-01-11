package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudAssetV1p4beta1Identity
 * An identity under analysis.
**/
public class GoogleCloudAssetV1p4beta1Identity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analysisState")
    public GoogleCloudAssetV1p4beta1AnalysisState analysisState;
    public GoogleCloudAssetV1p4beta1Identity withAnalysisState(GoogleCloudAssetV1p4beta1AnalysisState analysisState) {
        this.analysisState = analysisState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudAssetV1p4beta1Identity withName(String name) {
        this.name = name;
        return this;
    }
}