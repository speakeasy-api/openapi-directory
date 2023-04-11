import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Series {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns Series metadata for the given series ids.
     */
    booksSeriesGet(req: operations.BooksSeriesGetRequest, security: operations.BooksSeriesGetSecurity, config?: AxiosRequestConfig): Promise<operations.BooksSeriesGetResponse>;
    /**
     * Returns Series membership data given the series id.
     */
    booksSeriesMembershipGet(req: operations.BooksSeriesMembershipGetRequest, security: operations.BooksSeriesMembershipGetSecurity, config?: AxiosRequestConfig): Promise<operations.BooksSeriesMembershipGetResponse>;
}
