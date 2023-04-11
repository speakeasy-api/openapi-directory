import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1WebhookGenericWebService } from "./googleclouddialogflowcxv3beta1webhookgenericwebservice";
import { GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig } from "./googleclouddialogflowcxv3beta1webhookservicedirectoryconfig";
/**
 * Webhooks host the developer's business logic. During a session, webhooks allow the developer to use the data extracted by Dialogflow's natural language processing to generate dynamic responses, validate collected data, or trigger actions on the backend.
 */
export declare class GoogleCloudDialogflowCxV3beta1Webhook extends SpeakeasyBase {
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
    genericWebService?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebService;
    /**
     * The unique identifier of the webhook. Required for the Webhooks.UpdateWebhook method. Webhooks.CreateWebhook populates the name automatically. Format: `projects//locations//agents//webhooks/`.
     */
    name?: string;
    /**
     * Represents configuration for a [Service Directory](https://cloud.google.com/service-directory) service.
     */
    serviceDirectory?: GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig;
    /**
     * Webhook execution timeout. Execution is considered failed if Dialogflow doesn't receive a response from webhook at the end of the timeout period. Defaults to 5 seconds, maximum allowed timeout is 30 seconds.
     */
    timeout?: string;
}
