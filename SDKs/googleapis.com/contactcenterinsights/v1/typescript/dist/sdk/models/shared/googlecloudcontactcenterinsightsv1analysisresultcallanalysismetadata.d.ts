import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1CallAnnotation } from "./googlecloudcontactcenterinsightsv1callannotation";
import { GoogleCloudContactcenterinsightsV1ConversationLevelSentiment } from "./googlecloudcontactcenterinsightsv1conversationlevelsentiment";
import { GoogleCloudContactcenterinsightsV1Entity } from "./googlecloudcontactcenterinsightsv1entity";
import { GoogleCloudContactcenterinsightsV1Intent } from "./googlecloudcontactcenterinsightsv1intent";
import { GoogleCloudContactcenterinsightsV1IssueModelResult } from "./googlecloudcontactcenterinsightsv1issuemodelresult";
import { GoogleCloudContactcenterinsightsV1PhraseMatchData } from "./googlecloudcontactcenterinsightsv1phrasematchdata";
/**
 * Call-specific metadata created during analysis.
 */
export declare class GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata extends SpeakeasyBase {
    /**
     * A list of call annotations that apply to this call.
     */
    annotations?: GoogleCloudContactcenterinsightsV1CallAnnotation[];
    /**
     * All the entities in the call.
     */
    entities?: Record<string, GoogleCloudContactcenterinsightsV1Entity>;
    /**
     * All the matched intents in the call.
     */
    intents?: Record<string, GoogleCloudContactcenterinsightsV1Intent>;
    /**
     * Issue Modeling result on a conversation.
     */
    issueModelResult?: GoogleCloudContactcenterinsightsV1IssueModelResult;
    /**
     * All the matched phrase matchers in the call.
     */
    phraseMatchers?: Record<string, GoogleCloudContactcenterinsightsV1PhraseMatchData>;
    /**
     * Overall conversation-level sentiment for each channel of the call.
     */
    sentiments?: GoogleCloudContactcenterinsightsV1ConversationLevelSentiment[];
}
