package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2InspectJobConfig
 * Controls what and how to inspect for findings.
**/
public class GooglePrivacyDlpV2InspectJobConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actions")
    public GooglePrivacyDlpV2Action[] actions;
    public GooglePrivacyDlpV2InspectJobConfig withActions(GooglePrivacyDlpV2Action[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inspectConfig")
    public GooglePrivacyDlpV2InspectConfig inspectConfig;
    public GooglePrivacyDlpV2InspectJobConfig withInspectConfig(GooglePrivacyDlpV2InspectConfig inspectConfig) {
        this.inspectConfig = inspectConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inspectTemplateName")
    public String inspectTemplateName;
    public GooglePrivacyDlpV2InspectJobConfig withInspectTemplateName(String inspectTemplateName) {
        this.inspectTemplateName = inspectTemplateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageConfig")
    public GooglePrivacyDlpV2StorageConfig storageConfig;
    public GooglePrivacyDlpV2InspectJobConfig withStorageConfig(GooglePrivacyDlpV2StorageConfig storageConfig) {
        this.storageConfig = storageConfig;
        return this;
    }
}