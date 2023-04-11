import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://rest.nexmo.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * The Numbers API enables you to manage your existing numbers and buy new virtual numbers for use with the Vonage APIs. Further information is here: <https://developer.nexmo.com/numbers/overview>
 *
 * @see {@link https://developer.nexmo.com/numbers/overview} - Numbers product documentation on the Vonage Developer Portal
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Buy a number
     *
     * @remarks
     * Request to purchase a specific inbound number.
     */
    buyANumber(req: shared.NumberDetails, config?: AxiosRequestConfig): Promise<operations.BuyANumberResponse>;
    /**
     * Cancel a number
     *
     * @remarks
     * Cancel your subscription for a specific inbound number.
     */
    cancelANumber(req: shared.NumberDetails, config?: AxiosRequestConfig): Promise<operations.CancelANumberResponse>;
    /**
     * Search available numbers
     *
     * @remarks
     * Retrieve inbound numbers that are available for the specified country.
     */
    getAvailableNumbers(req: operations.GetAvailableNumbersRequest, config?: AxiosRequestConfig): Promise<operations.GetAvailableNumbersResponse>;
    /**
     * List the numbers you own
     *
     * @remarks
     * Retrieve all the inbound numbers associated with your Vonage account.
     */
    getOwnedNumbers(req: operations.GetOwnedNumbersRequest, config?: AxiosRequestConfig): Promise<operations.GetOwnedNumbersResponse>;
    /**
     * Update a number
     *
     * @remarks
     * Change the behaviour of a number that you own.
     */
    updateANumber(req: shared.NumberDetailsUpdate, config?: AxiosRequestConfig): Promise<operations.UpdateANumberResponse>;
}
