import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MeterFolderInformation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Beta: Gets the General Information for a Meter or a Folder
     *
     * @remarks
     * Beta: Gets the General Information for a Meter or a Folder
     */
    meterFolderInformationGet(req: operations.MeterFolderInformationGetRequest, config?: AxiosRequestConfig): Promise<operations.MeterFolderInformationGetResponse>;
    /**
     * Sets the Name of a Meter or a Folder
     *
     * @remarks
     * Sets the Name of a Meter or a Folder
     */
    meterFolderInformationPostForm(req: shared.MeterFolderInformationToPost, config?: AxiosRequestConfig): Promise<operations.MeterFolderInformationPostFormResponse>;
    /**
     * Sets the Name of a Meter or a Folder
     *
     * @remarks
     * Sets the Name of a Meter or a Folder
     */
    meterFolderInformationPostJson(req: shared.MeterFolderInformationToPost, config?: AxiosRequestConfig): Promise<operations.MeterFolderInformationPostJsonResponse>;
    /**
     * Sets the Name of a Meter or a Folder
     *
     * @remarks
     * Sets the Name of a Meter or a Folder
     */
    meterFolderInformationPostRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.MeterFolderInformationPostRawResponse>;
}
