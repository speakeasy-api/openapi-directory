package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1AnswerFeedback
 * The feedback that the customer has about a certain answer in the conversation.
**/
public class GoogleCloudContactcenterinsightsV1AnswerFeedback {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clicked")
    public Boolean clicked;
    public GoogleCloudContactcenterinsightsV1AnswerFeedback withClicked(Boolean clicked) {
        this.clicked = clicked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("correctnessLevel")
    public GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevelEnum correctnessLevel;
    public GoogleCloudContactcenterinsightsV1AnswerFeedback withCorrectnessLevel(GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevelEnum correctnessLevel) {
        this.correctnessLevel = correctnessLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayed")
    public Boolean displayed;
    public GoogleCloudContactcenterinsightsV1AnswerFeedback withDisplayed(Boolean displayed) {
        this.displayed = displayed;
        return this;
    }
}