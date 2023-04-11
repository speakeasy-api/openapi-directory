import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1AnnotationBoundary } from "./googlecloudcontactcenterinsightsv1annotationboundary";
import { GoogleCloudContactcenterinsightsV1AnswerFeedback } from "./googlecloudcontactcenterinsightsv1answerfeedback";
import { GoogleCloudContactcenterinsightsV1ArticleSuggestionData } from "./googlecloudcontactcenterinsightsv1articlesuggestiondata";
import { GoogleCloudContactcenterinsightsV1DialogflowInteractionData } from "./googlecloudcontactcenterinsightsv1dialogflowinteractiondata";
import { GoogleCloudContactcenterinsightsV1FaqAnswerData } from "./googlecloudcontactcenterinsightsv1faqanswerdata";
import { GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData } from "./googlecloudcontactcenterinsightsv1smartcomposesuggestiondata";
import { GoogleCloudContactcenterinsightsV1SmartReplyData } from "./googlecloudcontactcenterinsightsv1smartreplydata";
/**
 * An annotation that was generated during the customer and agent interaction.
 */
export declare class GoogleCloudContactcenterinsightsV1RuntimeAnnotation extends SpeakeasyBase {
    /**
     * The unique identifier of the annotation. Format: projects/{project}/locations/{location}/conversationDatasets/{dataset}/conversationDataItems/{data_item}/conversationAnnotations/{annotation}
     */
    annotationId?: string;
    /**
     * The feedback that the customer has about a certain answer in the conversation.
     */
    answerFeedback?: GoogleCloudContactcenterinsightsV1AnswerFeedback;
    /**
     * Agent Assist Article Suggestion data.
     */
    articleSuggestion?: GoogleCloudContactcenterinsightsV1ArticleSuggestionData;
    /**
     * The time at which this annotation was created.
     */
    createTime?: string;
    /**
     * Dialogflow interaction data.
     */
    dialogflowInteraction?: GoogleCloudContactcenterinsightsV1DialogflowInteractionData;
    /**
     * A point in a conversation that marks the start or the end of an annotation.
     */
    endBoundary?: GoogleCloudContactcenterinsightsV1AnnotationBoundary;
    /**
     * Agent Assist frequently-asked-question answer data.
     */
    faqAnswer?: GoogleCloudContactcenterinsightsV1FaqAnswerData;
    /**
     * Agent Assist Smart Compose suggestion data.
     */
    smartComposeSuggestion?: GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData;
    /**
     * Agent Assist Smart Reply data.
     */
    smartReply?: GoogleCloudContactcenterinsightsV1SmartReplyData;
    /**
     * A point in a conversation that marks the start or the end of an annotation.
     */
    startBoundary?: GoogleCloudContactcenterinsightsV1AnnotationBoundary;
}
