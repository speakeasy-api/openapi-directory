import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MBus {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
     *             Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.
     *
     * @remarks
     * M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
     *             Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.
     */
    mBusPostForm(req: shared.MBusData, config?: AxiosRequestConfig): Promise<operations.MBusPostFormResponse>;
    /**
     * M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
     *             Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.
     *
     * @remarks
     * M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
     *             Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.
     */
    mBusPostJson(req: shared.MBusData, config?: AxiosRequestConfig): Promise<operations.MBusPostJsonResponse>;
    /**
     * M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
     *             Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.
     *
     * @remarks
     * M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
     *             Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.
     */
    mBusPostRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.MBusPostRawResponse>;
}
