import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * SSLScan API documentation
 *
 * @see {@link https://github.com/Patrowl/PatrowlDocs} - Find out more
 */
export declare class PatrowlEngine {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Clean scan
     *
     * @remarks
     * Clean scan identified by id.
     */
    cleanScanPage(req: operations.CleanScanPageRequest, config?: AxiosRequestConfig): Promise<operations.CleanScanPageResponse>;
    /**
     * Clean all scans
     *
     * @remarks
     * Clean all current scans.
     */
    cleanScansPage(config?: AxiosRequestConfig): Promise<operations.CleanScansPageResponse>;
    /**
     * Get findings on finished scans
     *
     * @remarks
     * Get findings on finished scans.
     */
    getFindingPage(req: operations.GetFindingPageRequest, config?: AxiosRequestConfig): Promise<operations.GetFindingPageResponse>;
    /**
     * Start a new scan
     *
     * @remarks
     * Start a new scan.
     */
    startScanPage(req: shared.ScanDefinition, config?: AxiosRequestConfig): Promise<operations.StartScanPageResponse>;
    /**
     * Status of a scan
     *
     * @remarks
     * Status of a scan identified by id.
     */
    statusScanPage(req: operations.StatusScanPageRequest, config?: AxiosRequestConfig): Promise<operations.StatusScanPageResponse>;
    /**
     * Status on all scans
     *
     * @remarks
     * Status all current scans.
     */
    statusScansPage(config?: AxiosRequestConfig): Promise<operations.StatusScansPageResponse>;
    /**
     * Stop a scan
     *
     * @remarks
     * Stop a scan identified by id.
     */
    stopScanPage(req: operations.StopScanPageRequest, config?: AxiosRequestConfig): Promise<operations.StopScanPageResponse>;
    /**
     * Stop all scans
     *
     * @remarks
     * Stop all current scans.
     */
    stopScansPage(config?: AxiosRequestConfig): Promise<operations.StopScansPageResponse>;
    /**
     * Index page
     *
     * @remarks
     * Return index page
     */
    getDefaultPage(config?: AxiosRequestConfig): Promise<operations.GetDefaultPageResponse>;
    /**
     * Engine info page
     *
     * @remarks
     * Return information on engine.
     */
    getInfoPage(config?: AxiosRequestConfig): Promise<operations.GetInfoPageResponse>;
    /**
     * Liveness page
     *
     * @remarks
     * Return liveness page
     */
    getLivenessPage(config?: AxiosRequestConfig): Promise<operations.GetLivenessPageResponse>;
    /**
     * Readiness page
     *
     * @remarks
     * Return liveness page
     */
    getReadinessPage(config?: AxiosRequestConfig): Promise<operations.GetReadinessPageResponse>;
    /**
     * Test page
     *
     * @remarks
     * Return test page
     */
    getTestPage(config?: AxiosRequestConfig): Promise<operations.GetTestPageResponse>;
    /**
     * Configuration reloading page
     *
     * @remarks
     * Reload the configuration file.
     */
    reloadConfigurationPage(config?: AxiosRequestConfig): Promise<operations.ReloadConfigurationPageResponse>;
}
