package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2RedactImageResponse
 * Results of redacting an image.
**/
public class GooglePrivacyDlpV2RedactImageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extractedText")
    public String extractedText;
    public GooglePrivacyDlpV2RedactImageResponse withExtractedText(String extractedText) {
        this.extractedText = extractedText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inspectResult")
    public GooglePrivacyDlpV2InspectResult inspectResult;
    public GooglePrivacyDlpV2RedactImageResponse withInspectResult(GooglePrivacyDlpV2InspectResult inspectResult) {
        this.inspectResult = inspectResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redactedImage")
    public String redactedImage;
    public GooglePrivacyDlpV2RedactImageResponse withRedactedImage(String redactedImage) {
        this.redactedImage = redactedImage;
        return this;
    }
}