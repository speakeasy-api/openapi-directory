import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Sessions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a new payment session
     *
     * @remarks
     * Use this API call to create a Klarna Payments session.<br/>When a session is created you will receive the available `payment_method_categories` for the session, a `session_id` and a `client_token`. The `session_id` can be used to read or update the session using the REST API. The `client_token` should be passed to the browser.
     * Read more on **[Create a new payment session](https://docs.klarna.com/klarna-payments/integrate-with-klarna-payments/step-1-initiate-a-payment/)**.
     */
    createCreditSession(req: shared.SessionCreateInput, config?: AxiosRequestConfig): Promise<operations.CreateCreditSessionResponse>;
    /**
     * Read an existing payment session
     *
     * @remarks
     * Use this API call to read a Klarna Payments session. You can read the Klarna Payments session at any time after it has been created, to get information about it. This will return all data that has been collected during the session.
     * Read more on **[Read an existing payment session](https://docs.klarna.com/klarna-payments/other-actions/check-the-details-of-a-payment-session/)**.
     */
    readCreditSession(req: operations.ReadCreditSessionRequest, config?: AxiosRequestConfig): Promise<operations.ReadCreditSessionResponse>;
    /**
     * Update an existing payment session
     *
     * @remarks
     * Use this API call to update a Klarna Payments session with new details, in case something in the order has changed and the checkout has been reloaded. Including if the consumer adds a new item to the cart or if consumer details are updated.
     * Read more on **[Update an existing payment session](https://docs.klarna.com/klarna-payments/other-actions/update-the-cart/)**.
     */
    updateCreditSession(req: operations.UpdateCreditSessionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCreditSessionResponse>;
}
