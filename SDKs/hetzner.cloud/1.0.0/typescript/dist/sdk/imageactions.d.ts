import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ImageActions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all Actions for an Image
     *
     * @remarks
     * Returns all Action objects for an Image. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
     */
    getImagesIdActions(req: operations.GetImagesIdActionsRequest, config?: AxiosRequestConfig): Promise<operations.GetImagesIdActionsResponse>;
    /**
     * Get an Action for an Image
     *
     * @remarks
     * Returns a specific Action for an Image.
     */
    getImagesIdActionsActionId(req: operations.GetImagesIdActionsActionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetImagesIdActionsActionIdResponse>;
    /**
     * Change Image Protection
     *
     * @remarks
     * Changes the protection configuration of the Image. Can only be used on snapshots.
     */
    postImagesIdActionsChangeProtection(req: operations.PostImagesIdActionsChangeProtectionRequest, config?: AxiosRequestConfig): Promise<operations.PostImagesIdActionsChangeProtectionResponse>;
}
