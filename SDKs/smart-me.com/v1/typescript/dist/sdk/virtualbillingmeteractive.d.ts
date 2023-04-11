import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class VirtualBillingMeterActive {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Beta: Gets all active virtual meters
     *
     * @remarks
     * Beta: Gets all active virtual meters.
     */
    virtualBillingMeterActiveGet(config?: AxiosRequestConfig): Promise<operations.VirtualBillingMeterActiveGetResponse>;
    /**
     * Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
     *
     * @remarks
     * Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
     */
    virtualBillingMeterActivePostForm(req: shared.VMeterToActivate, config?: AxiosRequestConfig): Promise<operations.VirtualBillingMeterActivePostFormResponse>;
    /**
     * Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
     *
     * @remarks
     * Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
     */
    virtualBillingMeterActivePostJson(req: shared.VMeterToActivate, config?: AxiosRequestConfig): Promise<operations.VirtualBillingMeterActivePostJsonResponse>;
    /**
     * Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
     *
     * @remarks
     * Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
     */
    virtualBillingMeterActivePostRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.VirtualBillingMeterActivePostRawResponse>;
}
