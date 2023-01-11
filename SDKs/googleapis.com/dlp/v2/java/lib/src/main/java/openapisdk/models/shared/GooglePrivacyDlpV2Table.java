package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2Table
 * Structured content to inspect. Up to 50,000 `Value`s per request allowed. See https://cloud.google.com/dlp/docs/inspecting-structured-text#inspecting_a_table to learn more.
**/
public class GooglePrivacyDlpV2Table {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public GooglePrivacyDlpV2FieldId[] headers;
    public GooglePrivacyDlpV2Table withHeaders(GooglePrivacyDlpV2FieldId[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rows")
    public GooglePrivacyDlpV2Row[] rows;
    public GooglePrivacyDlpV2Table withRows(GooglePrivacyDlpV2Row[] rows) {
        this.rows = rows;
        return this;
    }
}