import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TimeCard {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a specific my time cards
     *
     * @remarks
     * Get a specific my time cards
     */
    getMyTimeCard(req: operations.GetMyTimeCardRequest, config?: AxiosRequestConfig): Promise<operations.GetMyTimeCardResponse>;
    /**
     * List my time cards
     *
     * @remarks
     * List my time cards
     */
    getMyTimeCardList(req: operations.GetMyTimeCardListRequest, config?: AxiosRequestConfig): Promise<operations.GetMyTimeCardListResponse>;
    /**
     * List a specific received time cards
     *
     * @remarks
     * List a specific received time cards
     */
    getReceivedTimeCard(req: operations.GetReceivedTimeCardRequest, config?: AxiosRequestConfig): Promise<operations.GetReceivedTimeCardResponse>;
    /**
     * List received time cards
     *
     * @remarks
     * List received time cards
     */
    getReceivedTimeCardList(req: operations.GetReceivedTimeCardListRequest, config?: AxiosRequestConfig): Promise<operations.GetReceivedTimeCardListResponse>;
}
