package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1RuntimeAnnotation
 * An annotation that was generated during the customer and agent interaction.
**/
public class GoogleCloudContactcenterinsightsV1RuntimeAnnotation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationId")
    public String annotationId;
    public GoogleCloudContactcenterinsightsV1RuntimeAnnotation withAnnotationId(String annotationId) {
        this.annotationId = annotationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answerFeedback")
    public GoogleCloudContactcenterinsightsV1AnswerFeedback answerFeedback;
    public GoogleCloudContactcenterinsightsV1RuntimeAnnotation withAnswerFeedback(GoogleCloudContactcenterinsightsV1AnswerFeedback answerFeedback) {
        this.answerFeedback = answerFeedback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("articleSuggestion")
    public GoogleCloudContactcenterinsightsV1ArticleSuggestionData articleSuggestion;
    public GoogleCloudContactcenterinsightsV1RuntimeAnnotation withArticleSuggestion(GoogleCloudContactcenterinsightsV1ArticleSuggestionData articleSuggestion) {
        this.articleSuggestion = articleSuggestion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudContactcenterinsightsV1RuntimeAnnotation withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dialogflowInteraction")
    public GoogleCloudContactcenterinsightsV1DialogflowInteractionData dialogflowInteraction;
    public GoogleCloudContactcenterinsightsV1RuntimeAnnotation withDialogflowInteraction(GoogleCloudContactcenterinsightsV1DialogflowInteractionData dialogflowInteraction) {
        this.dialogflowInteraction = dialogflowInteraction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endBoundary")
    public GoogleCloudContactcenterinsightsV1AnnotationBoundary endBoundary;
    public GoogleCloudContactcenterinsightsV1RuntimeAnnotation withEndBoundary(GoogleCloudContactcenterinsightsV1AnnotationBoundary endBoundary) {
        this.endBoundary = endBoundary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("faqAnswer")
    public GoogleCloudContactcenterinsightsV1FaqAnswerData faqAnswer;
    public GoogleCloudContactcenterinsightsV1RuntimeAnnotation withFaqAnswer(GoogleCloudContactcenterinsightsV1FaqAnswerData faqAnswer) {
        this.faqAnswer = faqAnswer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smartComposeSuggestion")
    public GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData smartComposeSuggestion;
    public GoogleCloudContactcenterinsightsV1RuntimeAnnotation withSmartComposeSuggestion(GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData smartComposeSuggestion) {
        this.smartComposeSuggestion = smartComposeSuggestion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smartReply")
    public GoogleCloudContactcenterinsightsV1SmartReplyData smartReply;
    public GoogleCloudContactcenterinsightsV1RuntimeAnnotation withSmartReply(GoogleCloudContactcenterinsightsV1SmartReplyData smartReply) {
        this.smartReply = smartReply;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startBoundary")
    public GoogleCloudContactcenterinsightsV1AnnotationBoundary startBoundary;
    public GoogleCloudContactcenterinsightsV1RuntimeAnnotation withStartBoundary(GoogleCloudContactcenterinsightsV1AnnotationBoundary startBoundary) {
        this.startBoundary = startBoundary;
        return this;
    }
}