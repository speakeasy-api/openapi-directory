package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2JobTrigger
 * Contains a configuration to make dlp api calls on a repeating basis. See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more.
**/
public class GooglePrivacyDlpV2JobTrigger {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GooglePrivacyDlpV2JobTrigger withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GooglePrivacyDlpV2JobTrigger withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GooglePrivacyDlpV2JobTrigger withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public GooglePrivacyDlpV2Error[] errors;
    public GooglePrivacyDlpV2JobTrigger withErrors(GooglePrivacyDlpV2Error[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inspectJob")
    public GooglePrivacyDlpV2InspectJobConfig inspectJob;
    public GooglePrivacyDlpV2JobTrigger withInspectJob(GooglePrivacyDlpV2InspectJobConfig inspectJob) {
        this.inspectJob = inspectJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastRunTime")
    public String lastRunTime;
    public GooglePrivacyDlpV2JobTrigger withLastRunTime(String lastRunTime) {
        this.lastRunTime = lastRunTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GooglePrivacyDlpV2JobTrigger withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GooglePrivacyDlpV2JobTriggerStatusEnum status;
    public GooglePrivacyDlpV2JobTrigger withStatus(GooglePrivacyDlpV2JobTriggerStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggers")
    public GooglePrivacyDlpV2Trigger[] triggers;
    public GooglePrivacyDlpV2JobTrigger withTriggers(GooglePrivacyDlpV2Trigger[] triggers) {
        this.triggers = triggers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GooglePrivacyDlpV2JobTrigger withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}