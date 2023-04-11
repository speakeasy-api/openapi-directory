import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SoundEffects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Download sound effects
     *
     * @remarks
     * This endpoint redownloads sound effects that you have already received a license for. The download links in the response are valid for 8 hours.
     */
    downloadSfx(req: operations.DownloadSfxRequest, security: operations.DownloadSfxSecurity, config?: AxiosRequestConfig): Promise<operations.DownloadSfxResponse>;
    /**
     * Get details about sound effects
     *
     * @remarks
     * This endpoint shows information about a sound effect.
     */
    getSfxDetails(req: operations.GetSfxDetailsRequest, security: operations.GetSfxDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.GetSfxDetailsResponse>;
    /**
     * List sound effects licenses
     *
     * @remarks
     * This endpoint lists existing licenses.
     */
    getSfxLicenseList(req: operations.GetSfxLicenseListRequest, security: operations.GetSfxLicenseListSecurity, config?: AxiosRequestConfig): Promise<operations.GetSfxLicenseListResponse>;
    /**
     * List details about sound effects
     *
     * @remarks
     * This endpoint shows information about sound effects.
     */
    getSfxListDetails(req: operations.GetSfxListDetailsRequest, security: operations.GetSfxListDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.GetSfxListDetailsResponse>;
    /**
     * License sound effects
     *
     * @remarks
     * This endpoint licenses sounds effect assets.
     */
    licensesSFX(req: shared.LicenseSFXRequest, security: operations.LicensesSFXSecurity, config?: AxiosRequestConfig): Promise<operations.LicensesSFXResponse>;
    /**
     * Search for sound effects
     *
     * @remarks
     * This endpoint searches for sound effects. If you specify more than one search parameter, the API uses an AND condition.
     */
    searchSFX(req: operations.SearchSFXRequest, security: operations.SearchSFXSecurity, config?: AxiosRequestConfig): Promise<operations.SearchSFXResponse>;
}
