import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1Analysis, GoogleCloudContactcenterinsightsV1AnalysisInput } from "./googlecloudcontactcenterinsightsv1analysis";
import { GoogleCloudContactcenterinsightsV1ConversationCallMetadata } from "./googlecloudcontactcenterinsightsv1conversationcallmetadata";
import { GoogleCloudContactcenterinsightsV1ConversationDataSource, GoogleCloudContactcenterinsightsV1ConversationDataSourceInput } from "./googlecloudcontactcenterinsightsv1conversationdatasource";
import { GoogleCloudContactcenterinsightsV1ConversationTranscript } from "./googlecloudcontactcenterinsightsv1conversationtranscript";
import { GoogleCloudContactcenterinsightsV1DialogflowIntent } from "./googlecloudcontactcenterinsightsv1dialogflowintent";
import { GoogleCloudContactcenterinsightsV1RuntimeAnnotation } from "./googlecloudcontactcenterinsightsv1runtimeannotation";
/**
 * Immutable. The conversation medium, if unspecified will default to PHONE_CALL.
 */
export declare enum GoogleCloudContactcenterinsightsV1ConversationMediumEnum {
    MediumUnspecified = "MEDIUM_UNSPECIFIED",
    PhoneCall = "PHONE_CALL",
    Chat = "CHAT"
}
/**
 * The conversation resource.
 */
export declare class GoogleCloudContactcenterinsightsV1Conversation extends SpeakeasyBase {
    /**
     * An opaque, user-specified string representing the human agent who handled the conversation.
     */
    agentId?: string;
    /**
     * Call-specific metadata.
     */
    callMetadata?: GoogleCloudContactcenterinsightsV1ConversationCallMetadata;
    /**
     * Output only. The time at which the conversation was created.
     */
    createTime?: string;
    /**
     * The conversation source, which is a combination of transcript and audio.
     */
    dataSource?: GoogleCloudContactcenterinsightsV1ConversationDataSource;
    /**
     * Output only. All the matched Dialogflow intents in the call. The key corresponds to a Dialogflow intent, format: projects/{project}/agent/{agent}/intents/{intent}
     */
    dialogflowIntents?: Record<string, GoogleCloudContactcenterinsightsV1DialogflowIntent>;
    /**
     * Output only. The duration of the conversation.
     */
    duration?: string;
    /**
     * The time at which this conversation should expire. After this time, the conversation data and any associated analyses will be deleted.
     */
    expireTime?: string;
    /**
     * A map for the user to specify any custom fields. A maximum of 20 labels per conversation is allowed, with a maximum of 256 characters per entry.
     */
    labels?: Record<string, string>;
    /**
     * A user-specified language code for the conversation.
     */
    languageCode?: string;
    /**
     * The analysis resource.
     */
    latestAnalysis?: GoogleCloudContactcenterinsightsV1Analysis;
    /**
     * Immutable. The conversation medium, if unspecified will default to PHONE_CALL.
     */
    medium?: GoogleCloudContactcenterinsightsV1ConversationMediumEnum;
    /**
     * Immutable. The resource name of the conversation. Format: projects/{project}/locations/{location}/conversations/{conversation}
     */
    name?: string;
    /**
     * Obfuscated user ID which the customer sent to us.
     */
    obfuscatedUserId?: string;
    /**
     * Output only. The annotations that were generated during the customer and agent interaction.
     */
    runtimeAnnotations?: GoogleCloudContactcenterinsightsV1RuntimeAnnotation[];
    /**
     * The time at which the conversation started.
     */
    startTime?: string;
    /**
     * A message representing the transcript of a conversation.
     */
    transcript?: GoogleCloudContactcenterinsightsV1ConversationTranscript;
    /**
     * Input only. The TTL for this resource. If specified, then this TTL will be used to calculate the expire time.
     */
    ttl?: string;
    /**
     * Output only. The number of turns in the conversation.
     */
    turnCount?: number;
    /**
     * Output only. The most recent time at which the conversation was updated.
     */
    updateTime?: string;
}
/**
 * The conversation resource.
 */
export declare class GoogleCloudContactcenterinsightsV1ConversationInput extends SpeakeasyBase {
    /**
     * An opaque, user-specified string representing the human agent who handled the conversation.
     */
    agentId?: string;
    /**
     * Call-specific metadata.
     */
    callMetadata?: GoogleCloudContactcenterinsightsV1ConversationCallMetadata;
    /**
     * The conversation source, which is a combination of transcript and audio.
     */
    dataSource?: GoogleCloudContactcenterinsightsV1ConversationDataSourceInput;
    /**
     * The time at which this conversation should expire. After this time, the conversation data and any associated analyses will be deleted.
     */
    expireTime?: string;
    /**
     * A map for the user to specify any custom fields. A maximum of 20 labels per conversation is allowed, with a maximum of 256 characters per entry.
     */
    labels?: Record<string, string>;
    /**
     * A user-specified language code for the conversation.
     */
    languageCode?: string;
    /**
     * The analysis resource.
     */
    latestAnalysis?: GoogleCloudContactcenterinsightsV1AnalysisInput;
    /**
     * Immutable. The conversation medium, if unspecified will default to PHONE_CALL.
     */
    medium?: GoogleCloudContactcenterinsightsV1ConversationMediumEnum;
    /**
     * Immutable. The resource name of the conversation. Format: projects/{project}/locations/{location}/conversations/{conversation}
     */
    name?: string;
    /**
     * Obfuscated user ID which the customer sent to us.
     */
    obfuscatedUserId?: string;
    /**
     * The time at which the conversation started.
     */
    startTime?: string;
    /**
     * A message representing the transcript of a conversation.
     */
    transcript?: GoogleCloudContactcenterinsightsV1ConversationTranscript;
    /**
     * Input only. The TTL for this resource. If specified, then this TTL will be used to calculate the expire time.
     */
    ttl?: string;
}
