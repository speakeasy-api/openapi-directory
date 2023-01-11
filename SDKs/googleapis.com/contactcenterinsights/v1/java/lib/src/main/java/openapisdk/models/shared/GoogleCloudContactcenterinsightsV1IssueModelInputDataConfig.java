package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig
 * Configs for the input data used to create the issue model.
**/
public class GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("medium")
    public GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum medium;
    public GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig withMedium(GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum medium) {
        this.medium = medium;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trainingConversationsCount")
    public String trainingConversationsCount;
    public GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig withTrainingConversationsCount(String trainingConversationsCount) {
        this.trainingConversationsCount = trainingConversationsCount;
        return this;
    }
}