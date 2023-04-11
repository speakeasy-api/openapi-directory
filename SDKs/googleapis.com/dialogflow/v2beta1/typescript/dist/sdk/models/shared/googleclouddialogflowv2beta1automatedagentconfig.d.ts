import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the Automated Agent to connect to a conversation.
 */
export declare class GoogleCloudDialogflowV2beta1AutomatedAgentConfig extends SpeakeasyBase {
    /**
     * Required. ID of the Dialogflow agent environment to use. This project needs to either be the same project as the conversation or you need to grant `service-@gcp-sa-dialogflow.iam.gserviceaccount.com` the `Dialogflow API Service Agent` role in this project. - For ES agents, use format: `projects//locations//agent/environments/`. If environment is not specified, the default `draft` environment is used. Refer to [DetectIntentRequest](/dialogflow/docs/reference/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.DetectIntentRequest) for more details. - For CX agents, use format `projects//locations//agents//environments/`. If environment is not specified, the default `draft` environment is used.
     */
    agent?: string;
}
