import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OrderMarginRequirements {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return margin impact info
     *
     * @remarks
     * This endpoint allows the consumer to check the impact that an order would have on the account, including margin, NLV and estimated commission costs.
     * To specify the contract, you provide a value for the ContractId field, OR Ticker/ListingExchange/InstrumentType=STK for stocks OR Ticker/Currency/InstrumentType=CASH for FX.
     *
     */
    postAccountsAccountOrderImpact(req: operations.PostAccountsAccountOrderImpactRequest, config?: AxiosRequestConfig): Promise<operations.PostAccountsAccountOrderImpactResponse>;
}
