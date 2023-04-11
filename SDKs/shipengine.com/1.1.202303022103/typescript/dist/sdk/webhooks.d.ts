import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * [Webhooks](https://www.shipengine.com/docs/tracking/webhooks/) are a powerful feature of ShipEngine that can save you from sending repeated polling requests to check on the state of something.  With webhooks, ShipEngine will automatically contact your servers when the stage changes.  This can include [parcel tracking](https://www.shipengine.com/docs/tracking/) events, notification of the completion of a [batch operation](https://www.shipengine.com/docs/labels/bulk/),  or new [salses orders](https://www.shipengine.com/docs/orders/).
 *
 * @remarks
 *
 *
 * @see {@link https://www.shipengine.com/docs/tracking/webhooks/} - Learn how to setup webhooks and start listening to ShipEngine events.
 */
export declare class Webhooks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a Webhook
     *
     * @remarks
     * Create a webook for specific events in the environment.
     */
    createWebhook(req: shared.CreateWebhookRequestBody, config?: AxiosRequestConfig): Promise<operations.CreateWebhookResponse>;
    /**
     * Delete Webhook By ID
     *
     * @remarks
     * Delete a webhook
     */
    deleteWebhook(req: operations.DeleteWebhookRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebhookResponse>;
    /**
     * Get Webhook By ID
     *
     * @remarks
     * Retrieve individual webhook by an ID
     */
    getWebhookById(req: operations.GetWebhookByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhookByIdResponse>;
    /**
     * List Webhooks
     *
     * @remarks
     * List all webhooks currently enabled for the account.
     */
    listWebhooks(config?: AxiosRequestConfig): Promise<operations.ListWebhooksResponse>;
    /**
     * Update a Webhook
     *
     * @remarks
     * Update the webhook url property
     */
    updateWebhook(req: operations.UpdateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWebhookResponse>;
}
