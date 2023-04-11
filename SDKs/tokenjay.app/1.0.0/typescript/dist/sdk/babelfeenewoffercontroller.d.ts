import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BabelFeeNewOfferController {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    doCreateBabelBox(req: Record<string, Record<string, any>>, config?: AxiosRequestConfig): Promise<operations.DoCreateBabelBoxResponse>;
    ergoPayCreateBabelBox(req: operations.ErgoPayCreateBabelBoxRequest, config?: AxiosRequestConfig): Promise<operations.ErgoPayCreateBabelBoxResponse>;
    getBabelFeeNewOffer(config?: AxiosRequestConfig): Promise<operations.GetBabelFeeNewOfferResponse>;
    replaceTokenAmountInputFields(req: Record<string, Record<string, any>>, config?: AxiosRequestConfig): Promise<operations.ReplaceTokenAmountInputFieldsResponse>;
}
