import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Export {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * exportAssetsCsv - Asset inventory as CSV
    **/
    exportAssetsCsv(req: operations.ExportAssetsCsvRequest, config?: AxiosRequestConfig): Promise<operations.ExportAssetsCsvResponse>;
    /**
     * exportAssetsJson - Exports the asset inventory
    **/
    exportAssetsJson(req: operations.ExportAssetsJsonRequest, config?: AxiosRequestConfig): Promise<operations.ExportAssetsJsonResponse>;
    /**
     * exportAssetsJsonl - Asset inventory as JSON line-delimited
    **/
    exportAssetsJsonl(req: operations.ExportAssetsJsonlRequest, config?: AxiosRequestConfig): Promise<operations.ExportAssetsJsonlResponse>;
    /**
     * exportAssetsNmapXml - Asset inventory as Nmap-style XML
    **/
    exportAssetsNmapXml(req: operations.ExportAssetsNmapXmlRequest, config?: AxiosRequestConfig): Promise<operations.ExportAssetsNmapXmlResponse>;
    /**
     * exportServicesCsv - Service inventory as CSV
    **/
    exportServicesCsv(req: operations.ExportServicesCsvRequest, config?: AxiosRequestConfig): Promise<operations.ExportServicesCsvResponse>;
    /**
     * exportServicesJson - Service inventory as JSON
    **/
    exportServicesJson(req: operations.ExportServicesJsonRequest, config?: AxiosRequestConfig): Promise<operations.ExportServicesJsonResponse>;
    /**
     * exportServicesJsonl - Service inventory as JSON line-delimited
    **/
    exportServicesJsonl(req: operations.ExportServicesJsonlRequest, config?: AxiosRequestConfig): Promise<operations.ExportServicesJsonlResponse>;
    /**
     * exportSitesCsv - Site list as CSV
    **/
    exportSitesCsv(req: operations.ExportSitesCsvRequest, config?: AxiosRequestConfig): Promise<operations.ExportSitesCsvResponse>;
    /**
     * exportSitesJson - Export all sites
    **/
    exportSitesJson(req: operations.ExportSitesJsonRequest, config?: AxiosRequestConfig): Promise<operations.ExportSitesJsonResponse>;
    /**
     * exportSitesJsonl - Site list as JSON line-delimited
    **/
    exportSitesJsonl(req: operations.ExportSitesJsonlRequest, config?: AxiosRequestConfig): Promise<operations.ExportSitesJsonlResponse>;
    /**
     * exportWirelessCsv - Wireless inventory as CSV
    **/
    exportWirelessCsv(req: operations.ExportWirelessCsvRequest, config?: AxiosRequestConfig): Promise<operations.ExportWirelessCsvResponse>;
    /**
     * exportWirelessJson - Wireless inventory as JSON
    **/
    exportWirelessJson(req: operations.ExportWirelessJsonRequest, config?: AxiosRequestConfig): Promise<operations.ExportWirelessJsonResponse>;
    /**
     * exportWirelessJsonl - Wireless inventory as JSON line-delimited
    **/
    exportWirelessJsonl(req: operations.ExportWirelessJsonlRequest, config?: AxiosRequestConfig): Promise<operations.ExportWirelessJsonlResponse>;
}
