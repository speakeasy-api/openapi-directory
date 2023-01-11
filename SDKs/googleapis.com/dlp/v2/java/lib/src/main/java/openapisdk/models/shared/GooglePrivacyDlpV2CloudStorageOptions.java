package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2CloudStorageOptions
 * Options defining a file or a set of files within a Cloud Storage bucket.
**/
public class GooglePrivacyDlpV2CloudStorageOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bytesLimitPerFile")
    public String bytesLimitPerFile;
    public GooglePrivacyDlpV2CloudStorageOptions withBytesLimitPerFile(String bytesLimitPerFile) {
        this.bytesLimitPerFile = bytesLimitPerFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bytesLimitPerFilePercent")
    public Integer bytesLimitPerFilePercent;
    public GooglePrivacyDlpV2CloudStorageOptions withBytesLimitPerFilePercent(Integer bytesLimitPerFilePercent) {
        this.bytesLimitPerFilePercent = bytesLimitPerFilePercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileSet")
    public GooglePrivacyDlpV2FileSet fileSet;
    public GooglePrivacyDlpV2CloudStorageOptions withFileSet(GooglePrivacyDlpV2FileSet fileSet) {
        this.fileSet = fileSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileTypes")
    public GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum[] fileTypes;
    public GooglePrivacyDlpV2CloudStorageOptions withFileTypes(GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum[] fileTypes) {
        this.fileTypes = fileTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filesLimitPercent")
    public Integer filesLimitPercent;
    public GooglePrivacyDlpV2CloudStorageOptions withFilesLimitPercent(Integer filesLimitPercent) {
        this.filesLimitPercent = filesLimitPercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleMethod")
    public GooglePrivacyDlpV2CloudStorageOptionsSampleMethodEnum sampleMethod;
    public GooglePrivacyDlpV2CloudStorageOptions withSampleMethod(GooglePrivacyDlpV2CloudStorageOptionsSampleMethodEnum sampleMethod) {
        this.sampleMethod = sampleMethod;
        return this;
    }
}