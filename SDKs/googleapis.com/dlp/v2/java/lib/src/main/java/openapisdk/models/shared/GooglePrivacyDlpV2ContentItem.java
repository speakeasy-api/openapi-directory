package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GooglePrivacyDlpV2ContentItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("byteItem")
    public GooglePrivacyDlpV2ByteContentItem byteItem;
    public GooglePrivacyDlpV2ContentItem withByteItem(GooglePrivacyDlpV2ByteContentItem byteItem) {
        this.byteItem = byteItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("table")
    public GooglePrivacyDlpV2Table table;
    public GooglePrivacyDlpV2ContentItem withTable(GooglePrivacyDlpV2Table table) {
        this.table = table;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public GooglePrivacyDlpV2ContentItem withValue(String value) {
        this.value = value;
        return this;
    }
}