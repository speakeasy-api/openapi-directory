package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudAssetV1p4beta1Access
 * An IAM role or permission under analysis.
**/
public class GoogleCloudAssetV1p4beta1Access {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analysisState")
    public GoogleCloudAssetV1p4beta1AnalysisState analysisState;
    public GoogleCloudAssetV1p4beta1Access withAnalysisState(GoogleCloudAssetV1p4beta1AnalysisState analysisState) {
        this.analysisState = analysisState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permission")
    public String permission;
    public GoogleCloudAssetV1p4beta1Access withPermission(String permission) {
        this.permission = permission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public String role;
    public GoogleCloudAssetV1p4beta1Access withRole(String role) {
        this.role = role;
        return this;
    }
}