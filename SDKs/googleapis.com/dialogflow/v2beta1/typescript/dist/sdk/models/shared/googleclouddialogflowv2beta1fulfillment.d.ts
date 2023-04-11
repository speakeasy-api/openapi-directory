import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1FulfillmentFeature } from "./googleclouddialogflowv2beta1fulfillmentfeature";
import { GoogleCloudDialogflowV2beta1FulfillmentGenericWebService } from "./googleclouddialogflowv2beta1fulfillmentgenericwebservice";
/**
 * By default, your agent responds to a matched intent with a static response. As an alternative, you can provide a more dynamic response by using fulfillment. When you enable fulfillment for an intent, Dialogflow responds to that intent by calling a service that you define. For example, if an end-user wants to schedule a haircut on Friday, your service can check your database and respond to the end-user with availability information for Friday. For more information, see the [fulfillment guide](https://cloud.google.com/dialogflow/docs/fulfillment-overview).
 */
export declare class GoogleCloudDialogflowV2beta1Fulfillment extends SpeakeasyBase {
    /**
     * The human-readable name of the fulfillment, unique within the agent. This field is not used for Fulfillment in an Environment.
     */
    displayName?: string;
    /**
     * Whether fulfillment is enabled.
     */
    enabled?: boolean;
    /**
     * The field defines whether the fulfillment is enabled for certain features.
     */
    features?: GoogleCloudDialogflowV2beta1FulfillmentFeature[];
    /**
     * Represents configuration for a generic web service. Dialogflow supports two mechanisms for authentications: - Basic authentication with username and password. - Authentication with additional authentication headers. More information could be found at: https://cloud.google.com/dialogflow/docs/fulfillment-configure.
     */
    genericWebService?: GoogleCloudDialogflowV2beta1FulfillmentGenericWebService;
    /**
     * Required. The unique identifier of the fulfillment. Supported formats: - `projects//agent/fulfillment` - `projects//locations//agent/fulfillment` This field is not used for Fulfillment in an Environment.
     */
    name?: string;
}
