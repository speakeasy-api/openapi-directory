import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Archive {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postTargetsActivate - Activate targets
    **/
    postTargetsActivate(req: operations.PostTargetsActivateRequest, config?: AxiosRequestConfig): Promise<operations.PostTargetsActivateResponse>;
    /**
     * postTargetsArchive - Archive targets
    **/
    postTargetsArchive(req: operations.PostTargetsArchiveRequest, config?: AxiosRequestConfig): Promise<operations.PostTargetsArchiveResponse>;
    /**
     * postTargetsArchived - List archived targets
    **/
    postTargetsArchived(req: operations.PostTargetsArchivedRequest, config?: AxiosRequestConfig): Promise<operations.PostTargetsArchivedResponse>;
}
