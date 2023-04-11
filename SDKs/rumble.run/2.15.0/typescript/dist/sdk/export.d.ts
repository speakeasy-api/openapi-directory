import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Requires Export Token or Organization Key
 */
export declare class Export {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Top asset hardware products as CSV
     */
    exportAssetTopHWCSV(config?: AxiosRequestConfig): Promise<operations.ExportAssetTopHWCSVResponse>;
    /**
     * Top asset operating systems as CSV
     */
    exportAssetTopOSCSV(config?: AxiosRequestConfig): Promise<operations.ExportAssetTopOSCSVResponse>;
    /**
     * Top asset tags as CSV
     */
    exportAssetTopTagsCSV(config?: AxiosRequestConfig): Promise<operations.ExportAssetTopTagsCSVResponse>;
    /**
     * Top asset types as CSV
     */
    exportAssetTopTypesCSV(config?: AxiosRequestConfig): Promise<operations.ExportAssetTopTypesCSVResponse>;
    /**
     * Asset inventory as CSV
     */
    exportAssetsCSV(req: operations.ExportAssetsCSVRequest, security: operations.ExportAssetsCSVSecurity, config?: AxiosRequestConfig): Promise<operations.ExportAssetsCSVResponse>;
    /**
     * Exports the asset inventory
     */
    exportAssetsJSON(req: operations.ExportAssetsJSONRequest, security: operations.ExportAssetsJSONSecurity, config?: AxiosRequestConfig): Promise<operations.ExportAssetsJSONResponse>;
    /**
     * Asset inventory as JSON line-delimited
     */
    exportAssetsJSONL(req: operations.ExportAssetsJSONLRequest, security: operations.ExportAssetsJSONLSecurity, config?: AxiosRequestConfig): Promise<operations.ExportAssetsJSONLResponse>;
    /**
     * Asset inventory as Nmap-style XML
     */
    exportAssetsNmapXML(req: operations.ExportAssetsNmapXMLRequest, security: operations.ExportAssetsNmapXMLSecurity, config?: AxiosRequestConfig): Promise<operations.ExportAssetsNmapXMLResponse>;
    /**
     * Service inventory as CSV
     */
    exportServicesCSV(req: operations.ExportServicesCSVRequest, security: operations.ExportServicesCSVSecurity, config?: AxiosRequestConfig): Promise<operations.ExportServicesCSVResponse>;
    /**
     * Service inventory as JSON
     */
    exportServicesJSON(req: operations.ExportServicesJSONRequest, security: operations.ExportServicesJSONSecurity, config?: AxiosRequestConfig): Promise<operations.ExportServicesJSONResponse>;
    /**
     * Service inventory as JSON line-delimited
     */
    exportServicesJSONL(req: operations.ExportServicesJSONLRequest, security: operations.ExportServicesJSONLSecurity, config?: AxiosRequestConfig): Promise<operations.ExportServicesJSONLResponse>;
    /**
     * Top service products as CSV
     */
    exportServicesTopProductsCSV(config?: AxiosRequestConfig): Promise<operations.ExportServicesTopProductsCSVResponse>;
    /**
     * Top service protocols as CSV
     */
    exportServicesTopProtocolsCSV(config?: AxiosRequestConfig): Promise<operations.ExportServicesTopProtocolsCSVResponse>;
    /**
     * Top TCP services as CSV
     */
    exportServicesTopTCPCSV(config?: AxiosRequestConfig): Promise<operations.ExportServicesTopTCPCSVResponse>;
    /**
     * Top UDP services as CSV
     */
    exportServicesTopUDPCSV(config?: AxiosRequestConfig): Promise<operations.ExportServicesTopUDPCSVResponse>;
    /**
     * Site list as CSV
     */
    exportSitesCSV(config?: AxiosRequestConfig): Promise<operations.ExportSitesCSVResponse>;
    /**
     * Export all sites
     */
    exportSitesJSON(req: operations.ExportSitesJSONRequest, security: operations.ExportSitesJSONSecurity, config?: AxiosRequestConfig): Promise<operations.ExportSitesJSONResponse>;
    /**
     * Site list as JSON line-delimited
     */
    exportSitesJSONL(req: operations.ExportSitesJSONLRequest, security: operations.ExportSitesJSONLSecurity, config?: AxiosRequestConfig): Promise<operations.ExportSitesJSONLResponse>;
    /**
     * Subnet utilization statistics as as CSV
     */
    exportSubnetUtilizationStatsCSV(req: operations.ExportSubnetUtilizationStatsCSVRequest, security: operations.ExportSubnetUtilizationStatsCSVSecurity, config?: AxiosRequestConfig): Promise<operations.ExportSubnetUtilizationStatsCSVResponse>;
    /**
     * Wireless inventory as CSV
     */
    exportWirelessCSV(req: operations.ExportWirelessCSVRequest, security: operations.ExportWirelessCSVSecurity, config?: AxiosRequestConfig): Promise<operations.ExportWirelessCSVResponse>;
    /**
     * Wireless inventory as JSON
     */
    exportWirelessJSON(req: operations.ExportWirelessJSONRequest, security: operations.ExportWirelessJSONSecurity, config?: AxiosRequestConfig): Promise<operations.ExportWirelessJSONResponse>;
    /**
     * Wireless inventory as JSON line-delimited
     */
    exportWirelessJSONL(req: operations.ExportWirelessJSONLRequest, security: operations.ExportWirelessJSONLSecurity, config?: AxiosRequestConfig): Promise<operations.ExportWirelessJSONLResponse>;
}
