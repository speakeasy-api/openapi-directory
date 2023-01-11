package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2BigQueryField
 * Message defining a field of a BigQuery table.
**/
public class GooglePrivacyDlpV2BigQueryField {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public GooglePrivacyDlpV2FieldId field;
    public GooglePrivacyDlpV2BigQueryField withField(GooglePrivacyDlpV2FieldId field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("table")
    public GooglePrivacyDlpV2BigQueryTable table;
    public GooglePrivacyDlpV2BigQueryField withTable(GooglePrivacyDlpV2BigQueryTable table) {
        this.table = table;
        return this;
    }
}