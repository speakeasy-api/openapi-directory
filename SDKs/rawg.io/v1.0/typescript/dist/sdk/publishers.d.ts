import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Publishers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a list of video game publishers.
     */
    publishersList(req: operations.PublishersListRequest, config?: AxiosRequestConfig): Promise<operations.PublishersListResponse>;
    /**
     * Get details of the publisher.
     */
    publishersRead(req: operations.PublishersReadRequest, config?: AxiosRequestConfig): Promise<operations.PublishersReadResponse>;
}
