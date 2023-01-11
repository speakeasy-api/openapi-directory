package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2Deidentify
 * Create a de-identified copy of the requested table or files. A TransformationDetail will be created for each transformation. If any rows in BigQuery are skipped during de-identification (transformation errors or row size exceeds BigQuery insert API limits) they are placed in the failure output table. If the original row exceeds the BigQuery insert API limit it will be truncated when written to the failure output table. The failure output table can be set in the action.deidentify.output.big_query_output.deidentified_failure_output_table field, if no table is set, a table will be automatically created in the same project and dataset as the original table. Compatible with: Inspect
**/
public class GooglePrivacyDlpV2Deidentify {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudStorageOutput")
    public String cloudStorageOutput;
    public GooglePrivacyDlpV2Deidentify withCloudStorageOutput(String cloudStorageOutput) {
        this.cloudStorageOutput = cloudStorageOutput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileTypesToTransform")
    public GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum[] fileTypesToTransform;
    public GooglePrivacyDlpV2Deidentify withFileTypesToTransform(GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum[] fileTypesToTransform) {
        this.fileTypesToTransform = fileTypesToTransform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transformationConfig")
    public GooglePrivacyDlpV2TransformationConfig transformationConfig;
    public GooglePrivacyDlpV2Deidentify withTransformationConfig(GooglePrivacyDlpV2TransformationConfig transformationConfig) {
        this.transformationConfig = transformationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transformationDetailsStorageConfig")
    public GooglePrivacyDlpV2TransformationDetailsStorageConfig transformationDetailsStorageConfig;
    public GooglePrivacyDlpV2Deidentify withTransformationDetailsStorageConfig(GooglePrivacyDlpV2TransformationDetailsStorageConfig transformationDetailsStorageConfig) {
        this.transformationDetailsStorageConfig = transformationDetailsStorageConfig;
        return this;
    }
}