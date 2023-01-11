package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2DeidentifyTemplate
 * DeidentifyTemplates contains instructions on how to de-identify content. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
**/
public class GooglePrivacyDlpV2DeidentifyTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GooglePrivacyDlpV2DeidentifyTemplate withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deidentifyConfig")
    public GooglePrivacyDlpV2DeidentifyConfig deidentifyConfig;
    public GooglePrivacyDlpV2DeidentifyTemplate withDeidentifyConfig(GooglePrivacyDlpV2DeidentifyConfig deidentifyConfig) {
        this.deidentifyConfig = deidentifyConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GooglePrivacyDlpV2DeidentifyTemplate withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GooglePrivacyDlpV2DeidentifyTemplate withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GooglePrivacyDlpV2DeidentifyTemplate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GooglePrivacyDlpV2DeidentifyTemplate withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}