import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message for Agents.ExportAgent.
 */
export declare class GoogleCloudDialogflowV2ExportAgentRequest extends SpeakeasyBase {
    /**
     * Required. The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to export the agent to. The format of this URI must be `gs:///`. If left unspecified, the serialized agent is returned inline. Dialogflow performs a write operation for the Cloud Storage object on the caller's behalf, so your request authentication must have write permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage).
     */
    agentUri?: string;
}
