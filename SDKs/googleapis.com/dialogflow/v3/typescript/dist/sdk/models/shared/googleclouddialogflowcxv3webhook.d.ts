import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3WebhookGenericWebService } from "./googleclouddialogflowcxv3webhookgenericwebservice";
import { GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig } from "./googleclouddialogflowcxv3webhookservicedirectoryconfig";
/**
 * Webhooks host the developer's business logic. During a session, webhooks allow the developer to use the data extracted by Dialogflow's natural language processing to generate dynamic responses, validate collected data, or trigger actions on the backend.
 */
export declare class GoogleCloudDialogflowCxV3Webhook extends SpeakeasyBase {
    /**
     * Indicates whether the webhook is disabled.
     */
    disabled?: boolean;
    /**
     * Required. The human-readable name of the webhook, unique within the agent.
     */
    displayName?: string;
    /**
     * Represents configuration for a generic web service.
     */
    genericWebService?: GoogleCloudDialogflowCxV3WebhookGenericWebService;
    /**
     * The unique identifier of the webhook. Required for the Webhooks.UpdateWebhook method. Webhooks.CreateWebhook populates the name automatically. Format: `projects//locations//agents//webhooks/`.
     */
    name?: string;
    /**
     * Represents configuration for a [Service Directory](https://cloud.google.com/service-directory) service.
     */
    serviceDirectory?: GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig;
    /**
     * Webhook execution timeout. Execution is considered failed if Dialogflow doesn't receive a response from webhook at the end of the timeout period. Defaults to 5 seconds, maximum allowed timeout is 30 seconds.
     */
    timeout?: string;
}
