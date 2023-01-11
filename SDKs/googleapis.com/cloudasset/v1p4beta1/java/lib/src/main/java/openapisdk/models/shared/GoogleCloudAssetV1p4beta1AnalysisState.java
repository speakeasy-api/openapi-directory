package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudAssetV1p4beta1AnalysisState
 * Represents the detailed state of an entity under analysis, such as a resource, an identity or an access.
**/
public class GoogleCloudAssetV1p4beta1AnalysisState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cause")
    public String cause;
    public GoogleCloudAssetV1p4beta1AnalysisState withCause(String cause) {
        this.cause = cause;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum code;
    public GoogleCloudAssetV1p4beta1AnalysisState withCode(GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum code) {
        this.code = code;
        return this;
    }
}