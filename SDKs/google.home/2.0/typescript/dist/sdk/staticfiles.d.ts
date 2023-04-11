import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * This folder contains a list of static files stored in Home.
 */
export declare class StaticFiles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Chromecast Icon
     *
     * @remarks
     * **Update:** This no longer exists. It's not useful, anyway.
     *
     * A redirect to `http://www.gstatic.com/eureka/images/eureka_device.png`
     */
    chromecastIcon(config?: AxiosRequestConfig): Promise<operations.ChromecastIconResponse>;
    /**
     * Legal Notice
     *
     * @remarks
     * All licenses of programs used by Home.
     */
    legalNotice(config?: AxiosRequestConfig): Promise<operations.LegalNoticeResponse>;
}
