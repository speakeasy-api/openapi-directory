package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2JobTriggerInput
 * Contains a configuration to make dlp api calls on a repeating basis. See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more.
**/
public class GooglePrivacyDlpV2JobTriggerInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GooglePrivacyDlpV2JobTriggerInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GooglePrivacyDlpV2JobTriggerInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inspectJob")
    public GooglePrivacyDlpV2InspectJobConfig inspectJob;
    public GooglePrivacyDlpV2JobTriggerInput withInspectJob(GooglePrivacyDlpV2InspectJobConfig inspectJob) {
        this.inspectJob = inspectJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GooglePrivacyDlpV2JobTriggerInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GooglePrivacyDlpV2JobTriggerStatusEnum status;
    public GooglePrivacyDlpV2JobTriggerInput withStatus(GooglePrivacyDlpV2JobTriggerStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggers")
    public GooglePrivacyDlpV2Trigger[] triggers;
    public GooglePrivacyDlpV2JobTriggerInput withTriggers(GooglePrivacyDlpV2Trigger[] triggers) {
        this.triggers = triggers;
        return this;
    }
}