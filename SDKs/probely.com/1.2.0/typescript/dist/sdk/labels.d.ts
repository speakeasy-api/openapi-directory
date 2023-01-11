import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Labels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteLabelsId - Delete label
    **/
    deleteLabelsId(req: operations.DeleteLabelsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLabelsIdResponse>;
    /**
     * getLabels - List labels
    **/
    getLabels(req: operations.GetLabelsRequest, config?: AxiosRequestConfig): Promise<operations.GetLabelsResponse>;
    /**
     * getLabelsId - Retrieve framework
    **/
    getLabelsId(req: operations.GetLabelsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetLabelsIdResponse>;
    /**
     * patchLabelsId - Partial update
    **/
    patchLabelsId(req: operations.PatchLabelsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchLabelsIdResponse>;
    /**
     * postLabels - Create label
    **/
    postLabels(req: operations.PostLabelsRequest, config?: AxiosRequestConfig): Promise<operations.PostLabelsResponse>;
    /**
     * putLabelsId - Update label
    **/
    putLabelsId(req: operations.PutLabelsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutLabelsIdResponse>;
}
