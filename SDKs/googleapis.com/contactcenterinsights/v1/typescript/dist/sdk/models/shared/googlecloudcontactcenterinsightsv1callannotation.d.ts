import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1AnnotationBoundary } from "./googlecloudcontactcenterinsightsv1annotationboundary";
import { GoogleCloudContactcenterinsightsV1EntityMentionData } from "./googlecloudcontactcenterinsightsv1entitymentiondata";
import { GoogleCloudContactcenterinsightsV1IntentMatchData } from "./googlecloudcontactcenterinsightsv1intentmatchdata";
import { GoogleCloudContactcenterinsightsV1IssueMatchData } from "./googlecloudcontactcenterinsightsv1issuematchdata";
import { GoogleCloudContactcenterinsightsV1PhraseMatchData } from "./googlecloudcontactcenterinsightsv1phrasematchdata";
import { GoogleCloudContactcenterinsightsV1SentimentData } from "./googlecloudcontactcenterinsightsv1sentimentdata";
/**
 * A piece of metadata that applies to a window of a call.
 */
export declare class GoogleCloudContactcenterinsightsV1CallAnnotation extends SpeakeasyBase {
    /**
     * A point in a conversation that marks the start or the end of an annotation.
     */
    annotationEndBoundary?: GoogleCloudContactcenterinsightsV1AnnotationBoundary;
    /**
     * A point in a conversation that marks the start or the end of an annotation.
     */
    annotationStartBoundary?: GoogleCloudContactcenterinsightsV1AnnotationBoundary;
    /**
     * The channel of the audio where the annotation occurs. For single-channel audio, this field is not populated.
     */
    channelTag?: number;
    /**
     * The data for an entity mention annotation. This represents a mention of an `Entity` in the conversation.
     */
    entityMentionData?: GoogleCloudContactcenterinsightsV1EntityMentionData;
    /**
     * The data for a hold annotation.
     */
    holdData?: Record<string, any>;
    /**
     * The data for an intent match. Represents an intent match for a text segment in the conversation. A text segment can be part of a sentence, a complete sentence, or an utterance with multiple sentences.
     */
    intentMatchData?: GoogleCloudContactcenterinsightsV1IntentMatchData;
    /**
     * The data for an interruption annotation.
     */
    interruptionData?: Record<string, any>;
    /**
     * The data for an issue match annotation.
     */
    issueMatchData?: GoogleCloudContactcenterinsightsV1IssueMatchData;
    /**
     * The data for a matched phrase matcher. Represents information identifying a phrase matcher for a given match.
     */
    phraseMatchData?: GoogleCloudContactcenterinsightsV1PhraseMatchData;
    /**
     * The data for a sentiment annotation.
     */
    sentimentData?: GoogleCloudContactcenterinsightsV1SentimentData;
    /**
     * The data for a silence annotation.
     */
    silenceData?: Record<string, any>;
}
