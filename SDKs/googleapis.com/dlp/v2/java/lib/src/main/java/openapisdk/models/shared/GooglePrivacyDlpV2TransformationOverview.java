package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2TransformationOverview
 * Overview of the modifications that occurred.
**/
public class GooglePrivacyDlpV2TransformationOverview {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transformationSummaries")
    public GooglePrivacyDlpV2TransformationSummary[] transformationSummaries;
    public GooglePrivacyDlpV2TransformationOverview withTransformationSummaries(GooglePrivacyDlpV2TransformationSummary[] transformationSummaries) {
        this.transformationSummaries = transformationSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transformedBytes")
    public String transformedBytes;
    public GooglePrivacyDlpV2TransformationOverview withTransformedBytes(String transformedBytes) {
        this.transformedBytes = transformedBytes;
        return this;
    }
}