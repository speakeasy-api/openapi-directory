import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Wells {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * wellsFilesList - list files found for the well identified in the uri
    **/
    wellsFilesList(req: operations.WellsFilesListRequest, config?: AxiosRequestConfig): Promise<operations.WellsFilesListResponse>;
    /**
     * wellsList - returns a list of wells
    **/
    wellsList(req: operations.WellsListRequest, config?: AxiosRequestConfig): Promise<operations.WellsListResponse>;
    /**
     * wellsRead - Return well detail.
     * This view is open to all, and has no permissions.
    **/
    wellsRead(req: operations.WellsReadRequest, config?: AxiosRequestConfig): Promise<operations.WellsReadResponse>;
    /**
     * wellsTagsList - seach for wells by tag or owner
    **/
    wellsTagsList(req: operations.WellsTagsListRequest, config?: AxiosRequestConfig): Promise<operations.WellsTagsListResponse>;
}
