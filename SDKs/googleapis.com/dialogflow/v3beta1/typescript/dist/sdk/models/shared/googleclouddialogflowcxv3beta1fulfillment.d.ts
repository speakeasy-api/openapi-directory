import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases, GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesInput } from "./googleclouddialogflowcxv3beta1fulfillmentconditionalcases";
import { GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction } from "./googleclouddialogflowcxv3beta1fulfillmentsetparameteraction";
import { GoogleCloudDialogflowCxV3beta1ResponseMessage, GoogleCloudDialogflowCxV3beta1ResponseMessageInput } from "./googleclouddialogflowcxv3beta1responsemessage";
/**
 * A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both.
 */
export declare class GoogleCloudDialogflowCxV3beta1Fulfillment extends SpeakeasyBase {
    /**
     * Conditional cases for this fulfillment.
     */
    conditionalCases?: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases[];
    /**
     * The list of rich message responses to present to the user.
     */
    messages?: GoogleCloudDialogflowCxV3beta1ResponseMessage[];
    /**
     * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
     */
    returnPartialResponses?: boolean;
    /**
     * Set parameter values before executing the webhook.
     */
    setParameterActions?: GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction[];
    /**
     * The value of this field will be populated in the WebhookRequest `fulfillmentInfo.tag` field by Dialogflow when the associated webhook is called. The tag is typically used by the webhook service to identify which fulfillment is being called, but it could be used for other purposes. This field is required if `webhook` is specified.
     */
    tag?: string;
    /**
     * The webhook to call. Format: `projects//locations//agents//webhooks/`.
     */
    webhook?: string;
}
/**
 * A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both.
 */
export declare class GoogleCloudDialogflowCxV3beta1FulfillmentInput extends SpeakeasyBase {
    /**
     * Conditional cases for this fulfillment.
     */
    conditionalCases?: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesInput[];
    /**
     * The list of rich message responses to present to the user.
     */
    messages?: GoogleCloudDialogflowCxV3beta1ResponseMessageInput[];
    /**
     * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
     */
    returnPartialResponses?: boolean;
    /**
     * Set parameter values before executing the webhook.
     */
    setParameterActions?: GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction[];
    /**
     * The value of this field will be populated in the WebhookRequest `fulfillmentInfo.tag` field by Dialogflow when the associated webhook is called. The tag is typically used by the webhook service to identify which fulfillment is being called, but it could be used for other purposes. This field is required if `webhook` is specified.
     */
    tag?: string;
    /**
     * The webhook to call. Format: `projects//locations//agents//webhooks/`.
     */
    webhook?: string;
}
