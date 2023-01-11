package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommenderV1beta1InsightStateInfo
 * Information related to insight state.
**/
public class GoogleCloudRecommenderV1beta1InsightStateInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public GoogleCloudRecommenderV1beta1InsightStateInfoStateEnum state;
    public GoogleCloudRecommenderV1beta1InsightStateInfo withState(GoogleCloudRecommenderV1beta1InsightStateInfoStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateMetadata")
    public java.util.Map<String, String> stateMetadata;
    public GoogleCloudRecommenderV1beta1InsightStateInfo withStateMetadata(java.util.Map<String, String> stateMetadata) {
        this.stateMetadata = stateMetadata;
        return this;
    }
}