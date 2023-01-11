package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2ByteContentItem
 * Container for bytes to inspect or redact.
**/
public class GooglePrivacyDlpV2ByteContentItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String data;
    public GooglePrivacyDlpV2ByteContentItem withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GooglePrivacyDlpV2ByteContentItemTypeEnum type;
    public GooglePrivacyDlpV2ByteContentItem withType(GooglePrivacyDlpV2ByteContentItemTypeEnum type) {
        this.type = type;
        return this;
    }
}