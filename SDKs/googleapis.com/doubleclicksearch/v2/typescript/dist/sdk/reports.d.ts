import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Reports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Generates and returns a report immediately.
     */
    doubleclicksearchReportsGenerate(req: operations.DoubleclicksearchReportsGenerateRequest, security: operations.DoubleclicksearchReportsGenerateSecurity, config?: AxiosRequestConfig): Promise<operations.DoubleclicksearchReportsGenerateResponse>;
    /**
     * Polls for the status of a report request.
     */
    doubleclicksearchReportsGet(req: operations.DoubleclicksearchReportsGetRequest, security: operations.DoubleclicksearchReportsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DoubleclicksearchReportsGetResponse>;
    /**
     * Downloads a report file encoded in UTF-8.
     */
    doubleclicksearchReportsGetFile(req: operations.DoubleclicksearchReportsGetFileRequest, security: operations.DoubleclicksearchReportsGetFileSecurity, config?: AxiosRequestConfig): Promise<operations.DoubleclicksearchReportsGetFileResponse>;
    /**
     * Downloads a csv file(encoded in UTF-8) that contains ID mappings between legacy SA360 and new SA360. The file includes all children entities of the given advertiser(e.g. engine accounts, campaigns, ad groups, etc.) that exist in both legacy SA360 and new SA360.
     */
    doubleclicksearchReportsGetIdMappingFile(req: operations.DoubleclicksearchReportsGetIdMappingFileRequest, security: operations.DoubleclicksearchReportsGetIdMappingFileSecurity, config?: AxiosRequestConfig): Promise<operations.DoubleclicksearchReportsGetIdMappingFileResponse>;
    /**
     * Inserts a report request into the reporting system.
     */
    doubleclicksearchReportsRequest(req: operations.DoubleclicksearchReportsRequestRequest, security: operations.DoubleclicksearchReportsRequestSecurity, config?: AxiosRequestConfig): Promise<operations.DoubleclicksearchReportsRequestResponse>;
}
