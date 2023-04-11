import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Context } from "./googleclouddialogflowv2beta1context";
import { GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig } from "./googleclouddialogflowv2beta1sentimentanalysisrequestconfig";
import { GoogleCloudDialogflowV2beta1SessionEntityType } from "./googleclouddialogflowv2beta1sessionentitytype";
import { GoogleCloudDialogflowV2beta1SubAgent } from "./googleclouddialogflowv2beta1subagent";
import { GoogleTypeLatLng } from "./googletypelatlng";
/**
 * Represents the parameters of the conversational query.
 */
export declare class GoogleCloudDialogflowV2beta1QueryParameters extends SpeakeasyBase {
    /**
     * The collection of contexts to be activated before this query is executed.
     */
    contexts?: GoogleCloudDialogflowV2beta1Context[];
    /**
     * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.
     */
    geoLocation?: GoogleTypeLatLng;
    /**
     * KnowledgeBases to get alternative results from. If not set, the KnowledgeBases enabled in the agent (through UI) will be used. Format: `projects//knowledgeBases/`.
     */
    knowledgeBaseNames?: string[];
    /**
     * This field can be used to pass custom data to your webhook. Arbitrary JSON objects are supported. If supplied, the value is used to populate the `WebhookRequest.original_detect_intent_request.payload` field sent to your webhook.
     */
    payload?: Record<string, any>;
    /**
     * Specifies whether to delete all contexts in the current session before the new ones are activated.
     */
    resetContexts?: boolean;
    /**
     * Configures the types of sentiment analysis to perform.
     */
    sentimentAnalysisRequestConfig?: GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig;
    /**
     * Additional session entity types to replace or extend developer entity types with. The entity synonyms apply to all languages and persist for the session of this query.
     */
    sessionEntityTypes?: GoogleCloudDialogflowV2beta1SessionEntityType[];
    /**
     * For mega agent query, directly specify which sub agents to query. If any specified sub agent is not linked to the mega agent, an error will be returned. If empty, Dialogflow will decide which sub agents to query. If specified for a non-mega-agent query, will be silently ignored.
     */
    subAgents?: GoogleCloudDialogflowV2beta1SubAgent[];
    /**
     * The time zone of this conversational query from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. If not provided, the time zone specified in agent settings is used.
     */
    timeZone?: string;
    /**
     * This field can be used to pass HTTP headers for a webhook call. These headers will be sent to webhook along with the headers that have been configured through Dialogflow web console. The headers defined within this field will overwrite the headers configured through Dialogflow console if there is a conflict. Header names are case-insensitive. Google's specified headers are not allowed. Including: "Host", "Content-Length", "Connection", "From", "User-Agent", "Accept-Encoding", "If-Modified-Since", "If-None-Match", "X-Forwarded-For", etc.
     */
    webhookHeaders?: Record<string, string>;
}
