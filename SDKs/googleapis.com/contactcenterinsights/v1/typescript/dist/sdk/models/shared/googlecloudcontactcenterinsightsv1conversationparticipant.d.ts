import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The role of the participant.
 */
export declare enum GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    HumanAgent = "HUMAN_AGENT",
    AutomatedAgent = "AUTOMATED_AGENT",
    EndUser = "END_USER",
    AnyAgent = "ANY_AGENT"
}
/**
 * The call participant speaking for a given utterance.
 */
export declare class GoogleCloudContactcenterinsightsV1ConversationParticipant extends SpeakeasyBase {
    /**
     * Deprecated. Use `dialogflow_participant_name` instead. The name of the Dialogflow participant. Format: projects/{project}/locations/{location}/conversations/{conversation}/participants/{participant}
     */
    dialogflowParticipant?: string;
    /**
     * The name of the participant provided by Dialogflow. Format: projects/{project}/locations/{location}/conversations/{conversation}/participants/{participant}
     */
    dialogflowParticipantName?: string;
    /**
     * Obfuscated user ID from Dialogflow.
     */
    obfuscatedExternalUserId?: string;
    /**
     * The role of the participant.
     */
    role?: GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum;
    /**
     * A user-specified ID representing the participant.
     */
    userId?: string;
}
