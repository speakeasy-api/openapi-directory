import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Agent restore mode. If not specified, `KEEP` is assumed.
 */
export declare enum GoogleCloudDialogflowCxV3RestoreAgentRequestRestoreOptionEnum {
    RestoreOptionUnspecified = "RESTORE_OPTION_UNSPECIFIED",
    Keep = "KEEP",
    Fallback = "FALLBACK"
}
/**
 * The request message for Agents.RestoreAgent.
 */
export declare class GoogleCloudDialogflowCxV3RestoreAgentRequest extends SpeakeasyBase {
    /**
     * Uncompressed raw byte content for agent.
     */
    agentContent?: string;
    /**
     * The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to restore agent from. The format of this URI must be `gs:///`. Dialogflow performs a read operation for the Cloud Storage object on the caller's behalf, so your request authentication must have read permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage).
     */
    agentUri?: string;
    /**
     * Agent restore mode. If not specified, `KEEP` is assumed.
     */
    restoreOption?: GoogleCloudDialogflowCxV3RestoreAgentRequestRestoreOptionEnum;
}
