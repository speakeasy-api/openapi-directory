import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message for Agents.ImportAgent.
 */
export declare class GoogleCloudDialogflowV2beta1ImportAgentRequest extends SpeakeasyBase {
    /**
     * Zip compressed raw byte content for agent.
     */
    agentContent?: string;
    /**
     * The URI to a Google Cloud Storage file containing the agent to import. Note: The URI must start with "gs://". Dialogflow performs a read operation for the Cloud Storage object on the caller's behalf, so your request authentication must have read permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage).
     */
    agentUri?: string;
}
