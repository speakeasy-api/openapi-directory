import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Buckets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    getBucket(req: operations.GetBucketRequest, config?: AxiosRequestConfig): Promise<operations.GetBucketResponse>;
    getBuckets(req: operations.GetBucketsRequest, config?: AxiosRequestConfig): Promise<operations.GetBucketsResponse>;
}
