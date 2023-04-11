import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AquiferCodes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * return a list of aquifer demand codes
     */
    aquiferCodesDemandList(req: operations.AquiferCodesDemandListRequest, config?: AxiosRequestConfig): Promise<operations.AquiferCodesDemandListResponse>;
    /**
     * return a list of aquifer material codes
     */
    aquiferCodesMaterialsList(req: operations.AquiferCodesMaterialsListRequest, config?: AxiosRequestConfig): Promise<operations.AquiferCodesMaterialsListResponse>;
    /**
     * return a list of aquifer productivity codes
     */
    aquiferCodesProductivityList(req: operations.AquiferCodesProductivityListRequest, config?: AxiosRequestConfig): Promise<operations.AquiferCodesProductivityListResponse>;
    /**
     * return a list of quality concern codes
     */
    aquiferCodesQualityConcernsList(req: operations.AquiferCodesQualityConcernsListRequest, config?: AxiosRequestConfig): Promise<operations.AquiferCodesQualityConcernsListResponse>;
    /**
     * return a list of aquifer subtype codes
     */
    aquiferCodesSubtypesList(req: operations.AquiferCodesSubtypesListRequest, config?: AxiosRequestConfig): Promise<operations.AquiferCodesSubtypesListResponse>;
    /**
     * return a list of aquifer vulnerability codes
     */
    aquiferCodesVulnerabilityList(req: operations.AquiferCodesVulnerabilityListRequest, config?: AxiosRequestConfig): Promise<operations.AquiferCodesVulnerabilityListResponse>;
    /**
     * return a list of water use codes
     */
    aquiferCodesWaterUseList(req: operations.AquiferCodesWaterUseListRequest, config?: AxiosRequestConfig): Promise<operations.AquiferCodesWaterUseListResponse>;
}
