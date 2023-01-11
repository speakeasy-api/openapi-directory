package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2RedactImageRequest
 * Request to search for potentially sensitive info in an image and redact it by covering it with a colored rectangle.
**/
public class GooglePrivacyDlpV2RedactImageRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("byteItem")
    public GooglePrivacyDlpV2ByteContentItem byteItem;
    public GooglePrivacyDlpV2RedactImageRequest withByteItem(GooglePrivacyDlpV2ByteContentItem byteItem) {
        this.byteItem = byteItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageRedactionConfigs")
    public GooglePrivacyDlpV2ImageRedactionConfig[] imageRedactionConfigs;
    public GooglePrivacyDlpV2RedactImageRequest withImageRedactionConfigs(GooglePrivacyDlpV2ImageRedactionConfig[] imageRedactionConfigs) {
        this.imageRedactionConfigs = imageRedactionConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeFindings")
    public Boolean includeFindings;
    public GooglePrivacyDlpV2RedactImageRequest withIncludeFindings(Boolean includeFindings) {
        this.includeFindings = includeFindings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inspectConfig")
    public GooglePrivacyDlpV2InspectConfig inspectConfig;
    public GooglePrivacyDlpV2RedactImageRequest withInspectConfig(GooglePrivacyDlpV2InspectConfig inspectConfig) {
        this.inspectConfig = inspectConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public GooglePrivacyDlpV2RedactImageRequest withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
}