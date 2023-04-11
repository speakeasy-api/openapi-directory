import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PretargetingConfig {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes an existing pretargeting config.
     */
    adexchangebuyerPretargetingConfigDelete(req: operations.AdexchangebuyerPretargetingConfigDeleteRequest, security: operations.AdexchangebuyerPretargetingConfigDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerPretargetingConfigDeleteResponse>;
    /**
     * Gets a specific pretargeting configuration
     */
    adexchangebuyerPretargetingConfigGet(req: operations.AdexchangebuyerPretargetingConfigGetRequest, security: operations.AdexchangebuyerPretargetingConfigGetSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerPretargetingConfigGetResponse>;
    /**
     * Inserts a new pretargeting configuration.
     */
    adexchangebuyerPretargetingConfigInsert(req: operations.AdexchangebuyerPretargetingConfigInsertRequest, security: operations.AdexchangebuyerPretargetingConfigInsertSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerPretargetingConfigInsertResponse>;
    /**
     * Retrieves a list of the authenticated user's pretargeting configurations.
     */
    adexchangebuyerPretargetingConfigList(req: operations.AdexchangebuyerPretargetingConfigListRequest, security: operations.AdexchangebuyerPretargetingConfigListSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerPretargetingConfigListResponse>;
    /**
     * Updates an existing pretargeting config. This method supports patch semantics.
     */
    adexchangebuyerPretargetingConfigPatch(req: operations.AdexchangebuyerPretargetingConfigPatchRequest, security: operations.AdexchangebuyerPretargetingConfigPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerPretargetingConfigPatchResponse>;
    /**
     * Updates an existing pretargeting config.
     */
    adexchangebuyerPretargetingConfigUpdate(req: operations.AdexchangebuyerPretargetingConfigUpdateRequest, security: operations.AdexchangebuyerPretargetingConfigUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerPretargetingConfigUpdateResponse>;
}
