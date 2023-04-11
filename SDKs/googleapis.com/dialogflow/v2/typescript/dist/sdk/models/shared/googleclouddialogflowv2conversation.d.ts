import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ConversationPhoneNumber } from "./googleclouddialogflowv2conversationphonenumber";
/**
 * The stage of a conversation. It indicates whether the virtual agent or a human agent is handling the conversation. If the conversation is created with the conversation profile that has Dialogflow config set, defaults to ConversationStage.VIRTUAL_AGENT_STAGE; Otherwise, defaults to ConversationStage.HUMAN_ASSIST_STAGE. If the conversation is created with the conversation profile that has Dialogflow config set but explicitly sets conversation_stage to ConversationStage.HUMAN_ASSIST_STAGE, it skips ConversationStage.VIRTUAL_AGENT_STAGE stage and directly goes to ConversationStage.HUMAN_ASSIST_STAGE.
 */
export declare enum GoogleCloudDialogflowV2ConversationConversationStageEnum {
    ConversationStageUnspecified = "CONVERSATION_STAGE_UNSPECIFIED",
    VirtualAgentStage = "VIRTUAL_AGENT_STAGE",
    HumanAssistStage = "HUMAN_ASSIST_STAGE"
}
/**
 * Output only. The current state of the Conversation.
 */
export declare enum GoogleCloudDialogflowV2ConversationLifecycleStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED",
    InProgress = "IN_PROGRESS",
    Completed = "COMPLETED"
}
/**
 * Represents a conversation. A conversation is an interaction between an agent, including live agents and Dialogflow agents, and a support customer. Conversations can include phone calls and text-based chat sessions.
 */
export declare class GoogleCloudDialogflowV2Conversation extends SpeakeasyBase {
    /**
     * Required. The Conversation Profile to be used to configure this Conversation. This field cannot be updated. Format: `projects//locations//conversationProfiles/`.
     */
    conversationProfile?: string;
    /**
     * The stage of a conversation. It indicates whether the virtual agent or a human agent is handling the conversation. If the conversation is created with the conversation profile that has Dialogflow config set, defaults to ConversationStage.VIRTUAL_AGENT_STAGE; Otherwise, defaults to ConversationStage.HUMAN_ASSIST_STAGE. If the conversation is created with the conversation profile that has Dialogflow config set but explicitly sets conversation_stage to ConversationStage.HUMAN_ASSIST_STAGE, it skips ConversationStage.VIRTUAL_AGENT_STAGE stage and directly goes to ConversationStage.HUMAN_ASSIST_STAGE.
     */
    conversationStage?: GoogleCloudDialogflowV2ConversationConversationStageEnum;
    /**
     * Output only. The time the conversation was finished.
     */
    endTime?: string;
    /**
     * Output only. The current state of the Conversation.
     */
    lifecycleState?: GoogleCloudDialogflowV2ConversationLifecycleStateEnum;
    /**
     * Output only. The unique identifier of this conversation. Format: `projects//locations//conversations/`.
     */
    name?: string;
    /**
     * Represents a phone number for telephony integration. It allows for connecting a particular conversation over telephony.
     */
    phoneNumber?: GoogleCloudDialogflowV2ConversationPhoneNumber;
    /**
     * Output only. The time the conversation was started.
     */
    startTime?: string;
}
/**
 * Represents a conversation. A conversation is an interaction between an agent, including live agents and Dialogflow agents, and a support customer. Conversations can include phone calls and text-based chat sessions.
 */
export declare class GoogleCloudDialogflowV2ConversationInput extends SpeakeasyBase {
    /**
     * Required. The Conversation Profile to be used to configure this Conversation. This field cannot be updated. Format: `projects//locations//conversationProfiles/`.
     */
    conversationProfile?: string;
    /**
     * The stage of a conversation. It indicates whether the virtual agent or a human agent is handling the conversation. If the conversation is created with the conversation profile that has Dialogflow config set, defaults to ConversationStage.VIRTUAL_AGENT_STAGE; Otherwise, defaults to ConversationStage.HUMAN_ASSIST_STAGE. If the conversation is created with the conversation profile that has Dialogflow config set but explicitly sets conversation_stage to ConversationStage.HUMAN_ASSIST_STAGE, it skips ConversationStage.VIRTUAL_AGENT_STAGE stage and directly goes to ConversationStage.HUMAN_ASSIST_STAGE.
     */
    conversationStage?: GoogleCloudDialogflowV2ConversationConversationStageEnum;
}
