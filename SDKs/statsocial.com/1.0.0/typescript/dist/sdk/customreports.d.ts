import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CustomReports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Step 3 of executing custom report
     *
     * @remarks
     * Used to create a custom report. This report treats the list of ids or handles as the audience (not their followers as in the twitter report). To create follower or tweet reports other methods must be used.
     *
     */
    getReportsCustomCreate(req: operations.GetReportsCustomCreateRequest, config?: AxiosRequestConfig): Promise<operations.GetReportsCustomCreateResponse>;
    /**
     * Step 1 of executing custom report
     *
     * @remarks
     * Used to create a custom report. This report treats the list of ids or handles as the audience (not their followers as in the twitter report). To create follower or tweet reports other methods must be used.
     *
     */
    getReportsCustomGenerate(req: operations.GetReportsCustomGenerateRequest, config?: AxiosRequestConfig): Promise<operations.GetReportsCustomGenerateResponse>;
    /**
     * Step 2 of executing custom report
     *
     * @remarks
     * Inserting twitter ids or handles into a custom report. This is used for custom reports only
     *
     */
    getReportsCustomInsert(req: operations.GetReportsCustomInsertRequest, config?: AxiosRequestConfig): Promise<operations.GetReportsCustomInsertResponse>;
    /**
     * Step 3 of executing custom report
     *
     * @remarks
     * Used to create a custom report. This report treats the list of ids or handles as the audience (not their followers as in the twitter report). To create follower or tweet reports other methods must be used.
     *
     */
    postReportsCustomCreate(req: operations.PostReportsCustomCreateRequest, config?: AxiosRequestConfig): Promise<operations.PostReportsCustomCreateResponse>;
    /**
     * Step 1 of executing custom report
     *
     * @remarks
     * Used to create a custom report. This report treats the list of ids or handles as the audience (not their followers as in the twitter report). To create follower or tweet reports other methods must be used.
     *
     */
    postReportsCustomGenerate(req: operations.PostReportsCustomGenerateRequest, config?: AxiosRequestConfig): Promise<operations.PostReportsCustomGenerateResponse>;
    /**
     * Step 2 of executing custom report
     *
     * @remarks
     * Inserting twitter ids or handles into a custom report. This is used for custom reports only
     *
     */
    postReportsCustomInsert(req: operations.PostReportsCustomInsertRequest, config?: AxiosRequestConfig): Promise<operations.PostReportsCustomInsertResponse>;
}
