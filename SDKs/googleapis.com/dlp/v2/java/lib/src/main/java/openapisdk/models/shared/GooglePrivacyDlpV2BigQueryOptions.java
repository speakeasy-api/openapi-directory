package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2BigQueryOptions
 * Options defining BigQuery table and row identifiers.
**/
public class GooglePrivacyDlpV2BigQueryOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedFields")
    public GooglePrivacyDlpV2FieldId[] excludedFields;
    public GooglePrivacyDlpV2BigQueryOptions withExcludedFields(GooglePrivacyDlpV2FieldId[] excludedFields) {
        this.excludedFields = excludedFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identifyingFields")
    public GooglePrivacyDlpV2FieldId[] identifyingFields;
    public GooglePrivacyDlpV2BigQueryOptions withIdentifyingFields(GooglePrivacyDlpV2FieldId[] identifyingFields) {
        this.identifyingFields = identifyingFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includedFields")
    public GooglePrivacyDlpV2FieldId[] includedFields;
    public GooglePrivacyDlpV2BigQueryOptions withIncludedFields(GooglePrivacyDlpV2FieldId[] includedFields) {
        this.includedFields = includedFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowsLimit")
    public String rowsLimit;
    public GooglePrivacyDlpV2BigQueryOptions withRowsLimit(String rowsLimit) {
        this.rowsLimit = rowsLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowsLimitPercent")
    public Integer rowsLimitPercent;
    public GooglePrivacyDlpV2BigQueryOptions withRowsLimitPercent(Integer rowsLimitPercent) {
        this.rowsLimitPercent = rowsLimitPercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleMethod")
    public GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnum sampleMethod;
    public GooglePrivacyDlpV2BigQueryOptions withSampleMethod(GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnum sampleMethod) {
        this.sampleMethod = sampleMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tableReference")
    public GooglePrivacyDlpV2BigQueryTable tableReference;
    public GooglePrivacyDlpV2BigQueryOptions withTableReference(GooglePrivacyDlpV2BigQueryTable tableReference) {
        this.tableReference = tableReference;
        return this;
    }
}