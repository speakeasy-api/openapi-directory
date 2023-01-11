package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1IssueModelInput
 * The issue model resource.
**/
public class GoogleCloudContactcenterinsightsV1IssueModelInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudContactcenterinsightsV1IssueModelInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputDataConfig")
    public GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput inputDataConfig;
    public GoogleCloudContactcenterinsightsV1IssueModelInput withInputDataConfig(GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput inputDataConfig) {
        this.inputDataConfig = inputDataConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudContactcenterinsightsV1IssueModelInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trainingStats")
    public GoogleCloudContactcenterinsightsV1IssueModelLabelStats trainingStats;
    public GoogleCloudContactcenterinsightsV1IssueModelInput withTrainingStats(GoogleCloudContactcenterinsightsV1IssueModelLabelStats trainingStats) {
        this.trainingStats = trainingStats;
        return this;
    }
}