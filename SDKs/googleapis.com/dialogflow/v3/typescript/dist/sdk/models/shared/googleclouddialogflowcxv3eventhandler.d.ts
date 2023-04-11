import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Fulfillment, GoogleCloudDialogflowCxV3FulfillmentInput } from "./googleclouddialogflowcxv3fulfillment";
/**
 * An event handler specifies an event that can be handled during a session. When the specified event happens, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the event, it will be called. * If there is a `target_page` associated with the event, the session will transition into the specified page. * If there is a `target_flow` associated with the event, the session will transition into the specified flow.
 */
export declare class GoogleCloudDialogflowCxV3EventHandler extends SpeakeasyBase {
    /**
     * Required. The name of the event to handle.
     */
    event?: string;
    /**
     * Output only. The unique identifier of this event handler.
     */
    name?: string;
    /**
     * The target flow to transition to. Format: `projects//locations//agents//flows/`.
     */
    targetFlow?: string;
    /**
     * The target page to transition to. Format: `projects//locations//agents//flows//pages/`.
     */
    targetPage?: string;
    /**
     * A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both.
     */
    triggerFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
}
/**
 * An event handler specifies an event that can be handled during a session. When the specified event happens, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the event, it will be called. * If there is a `target_page` associated with the event, the session will transition into the specified page. * If there is a `target_flow` associated with the event, the session will transition into the specified flow.
 */
export declare class GoogleCloudDialogflowCxV3EventHandlerInput extends SpeakeasyBase {
    /**
     * Required. The name of the event to handle.
     */
    event?: string;
    /**
     * The target flow to transition to. Format: `projects//locations//agents//flows/`.
     */
    targetFlow?: string;
    /**
     * The target page to transition to. Format: `projects//locations//agents//flows//pages/`.
     */
    targetPage?: string;
    /**
     * A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both.
     */
    triggerFulfillment?: GoogleCloudDialogflowCxV3FulfillmentInput;
}
