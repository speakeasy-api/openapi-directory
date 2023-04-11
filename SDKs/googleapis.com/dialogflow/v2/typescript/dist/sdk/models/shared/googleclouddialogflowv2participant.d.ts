import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Immutable. The role this participant plays in the conversation. This field must be set during participant creation and is then immutable.
 */
export declare enum GoogleCloudDialogflowV2ParticipantRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    HumanAgent = "HUMAN_AGENT",
    AutomatedAgent = "AUTOMATED_AGENT",
    EndUser = "END_USER"
}
/**
 * Represents a conversation participant (human agent, virtual agent, end-user).
 */
export declare class GoogleCloudDialogflowV2Participant extends SpeakeasyBase {
    /**
     * Optional. Key-value filters on the metadata of documents returned by article suggestion. If specified, article suggestion only returns suggested documents that match all filters in their Document.metadata. Multiple values for a metadata key should be concatenated by comma. For example, filters to match all documents that have 'US' or 'CA' in their market metadata values and 'agent' in their user metadata values will be ``` documents_metadata_filters { key: "market" value: "US,CA" } documents_metadata_filters { key: "user" value: "agent" } ```
     */
    documentsMetadataFilters?: Record<string, string>;
    /**
     * Optional. The unique identifier of this participant. Format: `projects//locations//conversations//participants/`.
     */
    name?: string;
    /**
     * Optional. Obfuscated user id that should be associated with the created participant. You can specify a user id as follows: 1. If you set this field in CreateParticipantRequest or UpdateParticipantRequest, Dialogflow adds the obfuscated user id with the participant. 2. If you set this field in AnalyzeContent or StreamingAnalyzeContent, Dialogflow will update Participant.obfuscated_external_user_id. Dialogflow returns an error if you try to add a user id for a non-END_USER participant. Dialogflow uses this user id for billing and measurement purposes. For example, Dialogflow determines whether a user in one conversation returned in a later conversation. Note: * Please never pass raw user ids to Dialogflow. Always obfuscate your user id first. * Dialogflow only accepts a UTF-8 encoded string, e.g., a hex digest of a hash function like SHA-512. * The length of the user id must be <= 256 characters.
     */
    obfuscatedExternalUserId?: string;
    /**
     * Immutable. The role this participant plays in the conversation. This field must be set during participant creation and is then immutable.
     */
    role?: GoogleCloudDialogflowV2ParticipantRoleEnum;
    /**
     * Optional. Label applied to streams representing this participant in SIPREC XML metadata and SDP. This is used to assign transcriptions from that media stream to this participant. This field can be updated.
     */
    sipRecordingMediaLabel?: string;
}
