import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AquiferCodes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * aquiferCodesDemandList - return a list of aquifer demand codes
    **/
    aquiferCodesDemandList(req: operations.AquiferCodesDemandListRequest, config?: AxiosRequestConfig): Promise<operations.AquiferCodesDemandListResponse>;
    /**
     * aquiferCodesMaterialsList - return a list of aquifer material codes
    **/
    aquiferCodesMaterialsList(req: operations.AquiferCodesMaterialsListRequest, config?: AxiosRequestConfig): Promise<operations.AquiferCodesMaterialsListResponse>;
    /**
     * aquiferCodesProductivityList - return a list of aquifer productivity codes
    **/
    aquiferCodesProductivityList(req: operations.AquiferCodesProductivityListRequest, config?: AxiosRequestConfig): Promise<operations.AquiferCodesProductivityListResponse>;
    /**
     * aquiferCodesQualityConcernsList - return a list of quality concern codes
    **/
    aquiferCodesQualityConcernsList(req: operations.AquiferCodesQualityConcernsListRequest, config?: AxiosRequestConfig): Promise<operations.AquiferCodesQualityConcernsListResponse>;
    /**
     * aquiferCodesSubtypesList - return a list of aquifer subtype codes
    **/
    aquiferCodesSubtypesList(req: operations.AquiferCodesSubtypesListRequest, config?: AxiosRequestConfig): Promise<operations.AquiferCodesSubtypesListResponse>;
    /**
     * aquiferCodesVulnerabilityList - return a list of aquifer vulnerability codes
    **/
    aquiferCodesVulnerabilityList(req: operations.AquiferCodesVulnerabilityListRequest, config?: AxiosRequestConfig): Promise<operations.AquiferCodesVulnerabilityListResponse>;
    /**
     * aquiferCodesWaterUseList - return a list of water use codes
    **/
    aquiferCodesWaterUseList(req: operations.AquiferCodesWaterUseListRequest, config?: AxiosRequestConfig): Promise<operations.AquiferCodesWaterUseListResponse>;
}
