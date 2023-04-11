import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1WebhookGenericWebService } from "./googleclouddialogflowcxv3beta1webhookgenericwebservice";
/**
 * Represents configuration for a [Service Directory](https://cloud.google.com/service-directory) service.
 */
export declare class GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig extends SpeakeasyBase {
    /**
     * Represents configuration for a generic web service.
     */
    genericWebService?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebService;
    /**
     * Required. The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: `projects//locations//namespaces//services/`. `Location ID` of the service directory must be the same as the location of the agent.
     */
    service?: string;
}
