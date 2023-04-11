import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class VirtualBillingMeterDeactivate {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Beta: Virtual Meter API: Deactivates a Virtual Meter.
     *
     * @remarks
     * Beta: Virtual Meter API: Deactivates a Virtual Meter.
     */
    virtualBillingMeterDeactivatePostForm(req: shared.VMeterToDeactivate, config?: AxiosRequestConfig): Promise<operations.VirtualBillingMeterDeactivatePostFormResponse>;
    /**
     * Beta: Virtual Meter API: Deactivates a Virtual Meter.
     *
     * @remarks
     * Beta: Virtual Meter API: Deactivates a Virtual Meter.
     */
    virtualBillingMeterDeactivatePostJson(req: shared.VMeterToDeactivate, config?: AxiosRequestConfig): Promise<operations.VirtualBillingMeterDeactivatePostJsonResponse>;
    /**
     * Beta: Virtual Meter API: Deactivates a Virtual Meter.
     *
     * @remarks
     * Beta: Virtual Meter API: Deactivates a Virtual Meter.
     */
    virtualBillingMeterDeactivatePostRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.VirtualBillingMeterDeactivatePostRawResponse>;
}
