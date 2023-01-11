package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2InfoTypeDescription
 * InfoType description.
**/
public class GooglePrivacyDlpV2InfoTypeDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public GooglePrivacyDlpV2InfoTypeCategory[] categories;
    public GooglePrivacyDlpV2InfoTypeDescription withCategories(GooglePrivacyDlpV2InfoTypeCategory[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GooglePrivacyDlpV2InfoTypeDescription withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GooglePrivacyDlpV2InfoTypeDescription withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GooglePrivacyDlpV2InfoTypeDescription withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sensitivityScore")
    public GooglePrivacyDlpV2SensitivityScore sensitivityScore;
    public GooglePrivacyDlpV2InfoTypeDescription withSensitivityScore(GooglePrivacyDlpV2SensitivityScore sensitivityScore) {
        this.sensitivityScore = sensitivityScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportedBy")
    public GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum[] supportedBy;
    public GooglePrivacyDlpV2InfoTypeDescription withSupportedBy(GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum[] supportedBy) {
        this.supportedBy = supportedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versions")
    public GooglePrivacyDlpV2VersionDescription[] versions;
    public GooglePrivacyDlpV2InfoTypeDescription withVersions(GooglePrivacyDlpV2VersionDescription[] versions) {
        this.versions = versions;
        return this;
    }
}