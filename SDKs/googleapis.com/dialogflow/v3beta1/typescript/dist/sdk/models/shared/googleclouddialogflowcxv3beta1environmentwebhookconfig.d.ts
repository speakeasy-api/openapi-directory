import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Webhook } from "./googleclouddialogflowcxv3beta1webhook";
/**
 * Configuration for webhooks.
 */
export declare class GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig extends SpeakeasyBase {
    /**
     * The list of webhooks to override for the agent environment. The webhook must exist in the agent. You can override fields in `generic_web_service` and `service_directory`.
     */
    webhookOverrides?: GoogleCloudDialogflowCxV3beta1Webhook[];
}
