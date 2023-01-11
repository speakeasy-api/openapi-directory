package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2DlpJob
 * Combines all of the information about a DLP job.
**/
public class GooglePrivacyDlpV2DlpJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GooglePrivacyDlpV2DlpJob withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public GooglePrivacyDlpV2DlpJob withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public GooglePrivacyDlpV2Error[] errors;
    public GooglePrivacyDlpV2DlpJob withErrors(GooglePrivacyDlpV2Error[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inspectDetails")
    public GooglePrivacyDlpV2InspectDataSourceDetails inspectDetails;
    public GooglePrivacyDlpV2DlpJob withInspectDetails(GooglePrivacyDlpV2InspectDataSourceDetails inspectDetails) {
        this.inspectDetails = inspectDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobTriggerName")
    public String jobTriggerName;
    public GooglePrivacyDlpV2DlpJob withJobTriggerName(String jobTriggerName) {
        this.jobTriggerName = jobTriggerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GooglePrivacyDlpV2DlpJob withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("riskDetails")
    public GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails riskDetails;
    public GooglePrivacyDlpV2DlpJob withRiskDetails(GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails riskDetails) {
        this.riskDetails = riskDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public GooglePrivacyDlpV2DlpJob withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public GooglePrivacyDlpV2DlpJobStateEnum state;
    public GooglePrivacyDlpV2DlpJob withState(GooglePrivacyDlpV2DlpJobStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GooglePrivacyDlpV2DlpJobTypeEnum type;
    public GooglePrivacyDlpV2DlpJob withType(GooglePrivacyDlpV2DlpJobTypeEnum type) {
        this.type = type;
        return this;
    }
}