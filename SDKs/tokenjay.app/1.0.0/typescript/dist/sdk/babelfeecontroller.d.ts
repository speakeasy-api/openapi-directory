import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BabelFeeController {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    checkForNotifications(config?: AxiosRequestConfig): Promise<operations.CheckForNotificationsResponse>;
    ergoPayCreateBabelBox1(req: operations.ErgoPayCreateBabelBox1Request, config?: AxiosRequestConfig): Promise<operations.ErgoPayCreateBabelBox1Response>;
    getBabelFeeOverview(config?: AxiosRequestConfig): Promise<operations.GetBabelFeeOverviewResponse>;
}
