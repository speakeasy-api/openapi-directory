import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CustomGatewayProcessPaymentsAndRefunds {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Adds a payment for an app on behalf of a user
     *
     * @remarks
     * - Results are returned for the market provided within the basic authentication credentials
     * - Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint
     *
     */
    postCustomGatewayPaymentOwnershipId(req: operations.PostCustomGatewayPaymentOwnershipIdRequest, config?: AxiosRequestConfig): Promise<operations.PostCustomGatewayPaymentOwnershipIdResponse>;
    /**
     * Fully or partially refund payment for an app on behalf of a user
     *
     * @remarks
     * - Results are returned for the market provided within the basic authentication credentials
     * - Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint
     *
     */
    postCustomGatewayRefundOwnershipId(req: operations.PostCustomGatewayRefundOwnershipIdRequest, config?: AxiosRequestConfig): Promise<operations.PostCustomGatewayRefundOwnershipIdResponse>;
}
