package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2ContentLocation
 * Precise location of the finding within a document, record, image, or metadata container.
**/
public class GooglePrivacyDlpV2ContentLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerName")
    public String containerName;
    public GooglePrivacyDlpV2ContentLocation withContainerName(String containerName) {
        this.containerName = containerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerTimestamp")
    public String containerTimestamp;
    public GooglePrivacyDlpV2ContentLocation withContainerTimestamp(String containerTimestamp) {
        this.containerTimestamp = containerTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerVersion")
    public String containerVersion;
    public GooglePrivacyDlpV2ContentLocation withContainerVersion(String containerVersion) {
        this.containerVersion = containerVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentLocation")
    public GooglePrivacyDlpV2DocumentLocation documentLocation;
    public GooglePrivacyDlpV2ContentLocation withDocumentLocation(GooglePrivacyDlpV2DocumentLocation documentLocation) {
        this.documentLocation = documentLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageLocation")
    public GooglePrivacyDlpV2ImageLocation imageLocation;
    public GooglePrivacyDlpV2ContentLocation withImageLocation(GooglePrivacyDlpV2ImageLocation imageLocation) {
        this.imageLocation = imageLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadataLocation")
    public GooglePrivacyDlpV2MetadataLocation metadataLocation;
    public GooglePrivacyDlpV2ContentLocation withMetadataLocation(GooglePrivacyDlpV2MetadataLocation metadataLocation) {
        this.metadataLocation = metadataLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recordLocation")
    public GooglePrivacyDlpV2RecordLocation recordLocation;
    public GooglePrivacyDlpV2ContentLocation withRecordLocation(GooglePrivacyDlpV2RecordLocation recordLocation) {
        this.recordLocation = recordLocation;
        return this;
    }
}