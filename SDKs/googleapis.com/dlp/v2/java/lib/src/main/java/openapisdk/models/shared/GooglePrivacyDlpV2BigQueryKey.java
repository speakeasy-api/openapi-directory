package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2BigQueryKey
 * Row key for identifying a record in BigQuery table.
**/
public class GooglePrivacyDlpV2BigQueryKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowNumber")
    public String rowNumber;
    public GooglePrivacyDlpV2BigQueryKey withRowNumber(String rowNumber) {
        this.rowNumber = rowNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tableReference")
    public GooglePrivacyDlpV2BigQueryTable tableReference;
    public GooglePrivacyDlpV2BigQueryKey withTableReference(GooglePrivacyDlpV2BigQueryTable tableReference) {
        this.tableReference = tableReference;
        return this;
    }
}