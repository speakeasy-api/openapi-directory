package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1IssueModel
 * The issue model resource.
**/
public class GoogleCloudContactcenterinsightsV1IssueModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudContactcenterinsightsV1IssueModel withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudContactcenterinsightsV1IssueModel withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputDataConfig")
    public GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig inputDataConfig;
    public GoogleCloudContactcenterinsightsV1IssueModel withInputDataConfig(GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig inputDataConfig) {
        this.inputDataConfig = inputDataConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issueCount")
    public String issueCount;
    public GoogleCloudContactcenterinsightsV1IssueModel withIssueCount(String issueCount) {
        this.issueCount = issueCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudContactcenterinsightsV1IssueModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public GoogleCloudContactcenterinsightsV1IssueModelStateEnum state;
    public GoogleCloudContactcenterinsightsV1IssueModel withState(GoogleCloudContactcenterinsightsV1IssueModelStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trainingStats")
    public GoogleCloudContactcenterinsightsV1IssueModelLabelStats trainingStats;
    public GoogleCloudContactcenterinsightsV1IssueModel withTrainingStats(GoogleCloudContactcenterinsightsV1IssueModelLabelStats trainingStats) {
        this.trainingStats = trainingStats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleCloudContactcenterinsightsV1IssueModel withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}