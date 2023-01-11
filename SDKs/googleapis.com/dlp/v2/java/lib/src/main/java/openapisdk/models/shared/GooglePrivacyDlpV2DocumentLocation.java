package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2DocumentLocation
 * Location of a finding within a document.
**/
public class GooglePrivacyDlpV2DocumentLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileOffset")
    public String fileOffset;
    public GooglePrivacyDlpV2DocumentLocation withFileOffset(String fileOffset) {
        this.fileOffset = fileOffset;
        return this;
    }
}