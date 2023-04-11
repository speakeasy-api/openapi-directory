import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Chromeosdevices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Takes an action that affects a Chrome OS Device. This includes deprovisioning, disabling, and re-enabling devices. *Warning:* * Deprovisioning a device will stop device policy syncing and remove device-level printers. After a device is deprovisioned, it must be wiped before it can be re-enrolled. * Lost or stolen devices should use the disable action. * Re-enabling a disabled device will consume a device license. If you do not have sufficient licenses available when completing the re-enable action, you will receive an error. For more information about deprovisioning and disabling devices, visit the [help center](https://support.google.com/chrome/a/answer/3523633).
     */
    directoryChromeosdevicesAction(req: operations.DirectoryChromeosdevicesActionRequest, security: operations.DirectoryChromeosdevicesActionSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryChromeosdevicesActionResponse>;
    /**
     * Retrieves a Chrome OS device's properties.
     */
    directoryChromeosdevicesGet(req: operations.DirectoryChromeosdevicesGetRequest, security: operations.DirectoryChromeosdevicesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryChromeosdevicesGetResponse>;
    /**
     * Retrieves a paginated list of Chrome OS devices within an account.
     */
    directoryChromeosdevicesList(req: operations.DirectoryChromeosdevicesListRequest, security: operations.DirectoryChromeosdevicesListSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryChromeosdevicesListResponse>;
    /**
     * Moves or inserts multiple Chrome OS devices to an organizational unit. You can move up to 50 devices at once.
     */
    directoryChromeosdevicesMoveDevicesToOu(req: operations.DirectoryChromeosdevicesMoveDevicesToOuRequest, security: operations.DirectoryChromeosdevicesMoveDevicesToOuSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryChromeosdevicesMoveDevicesToOuResponse>;
    /**
     * Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
     */
    directoryChromeosdevicesPatch(req: operations.DirectoryChromeosdevicesPatchRequest, security: operations.DirectoryChromeosdevicesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryChromeosdevicesPatchResponse>;
    /**
     * Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`.
     */
    directoryChromeosdevicesUpdate(req: operations.DirectoryChromeosdevicesUpdateRequest, security: operations.DirectoryChromeosdevicesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryChromeosdevicesUpdateResponse>;
}
