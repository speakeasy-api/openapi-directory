import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * You can add labels to findings to help you keep track of you development.
 *
 * @remarks
 * Use these endpoints to manage your labels.
 *
 */
export declare class Labels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete label
     */
    deleteLabelsId(req: operations.DeleteLabelsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLabelsIdResponse>;
    /**
     * List labels
     */
    getLabels(req: operations.GetLabelsRequest, config?: AxiosRequestConfig): Promise<operations.GetLabelsResponse>;
    /**
     * Retrieve framework
     */
    getLabelsId(req: operations.GetLabelsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetLabelsIdResponse>;
    /**
     * Partial update
     */
    patchLabelsId(req: operations.PatchLabelsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchLabelsIdResponse>;
    /**
     * Create label
     */
    postLabels(req: shared.LabelInput, config?: AxiosRequestConfig): Promise<operations.PostLabelsResponse>;
    /**
     * Update label
     */
    putLabelsId(req: operations.PutLabelsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutLabelsIdResponse>;
}
