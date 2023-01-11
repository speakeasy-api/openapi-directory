package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2Location
 * Specifies the location of the finding.
**/
public class GooglePrivacyDlpV2Location {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("byteRange")
    public GooglePrivacyDlpV2Range byteRange;
    public GooglePrivacyDlpV2Location withByteRange(GooglePrivacyDlpV2Range byteRange) {
        this.byteRange = byteRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("codepointRange")
    public GooglePrivacyDlpV2Range codepointRange;
    public GooglePrivacyDlpV2Location withCodepointRange(GooglePrivacyDlpV2Range codepointRange) {
        this.codepointRange = codepointRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("container")
    public GooglePrivacyDlpV2Container container;
    public GooglePrivacyDlpV2Location withContainer(GooglePrivacyDlpV2Container container) {
        this.container = container;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentLocations")
    public GooglePrivacyDlpV2ContentLocation[] contentLocations;
    public GooglePrivacyDlpV2Location withContentLocations(GooglePrivacyDlpV2ContentLocation[] contentLocations) {
        this.contentLocations = contentLocations;
        return this;
    }
}