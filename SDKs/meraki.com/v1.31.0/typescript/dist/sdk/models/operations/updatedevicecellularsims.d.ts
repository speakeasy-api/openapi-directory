import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * SIM Failover settings.
 */
export declare class UpdateDeviceCellularSimsRequestBodySimFailover extends SpeakeasyBase {
    /**
     * Failover to secondary SIM (optional)
     */
    enabled?: boolean;
}
/**
 * APN auth type.
 */
export declare enum UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnum {
    Chap = "chap",
    None = "none",
    Pap = "pap"
}
/**
 * APN authentication configurations.
 */
export declare class UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication extends SpeakeasyBase {
    /**
     * APN password, if type is set (if APN password is not supplied, the password is left unchanged).
     */
    password?: string;
    /**
     * APN auth type.
     */
    type?: UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnum;
    /**
     * APN username, if type is set.
     */
    username?: string;
}
export declare class UpdateDeviceCellularSimsRequestBodySimsApns extends SpeakeasyBase {
    /**
     * IP versions to support (permitted values include 'ipv4', 'ipv6').
     */
    allowedIpTypes: string[];
    /**
     * APN authentication configurations.
     */
    authentication?: UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication;
    /**
     * APN name.
     */
    name: string;
}
/**
 * SIM slot being configured. Must be 'sim1' on single-sim devices.
 */
export declare enum UpdateDeviceCellularSimsRequestBodySimsSlotEnum {
    Sim1 = "sim1",
    Sim2 = "sim2"
}
export declare class UpdateDeviceCellularSimsRequestBodySims extends SpeakeasyBase {
    /**
     * APN configurations. If empty, the default APN will be used.
     */
    apns?: UpdateDeviceCellularSimsRequestBodySimsApns[];
    /**
     * If true, this SIM is used for boot. Must be true on single-sim devices.
     */
    isPrimary?: boolean;
    /**
     * SIM slot being configured. Must be 'sim1' on single-sim devices.
     */
    slot?: UpdateDeviceCellularSimsRequestBodySimsSlotEnum;
}
export declare class UpdateDeviceCellularSimsRequestBody extends SpeakeasyBase {
    /**
     * SIM Failover settings.
     */
    simFailover?: UpdateDeviceCellularSimsRequestBodySimFailover;
    /**
     * List of SIMs. If a SIM was previously configured and not specified in this request, it will remain unchanged.
     */
    sims?: UpdateDeviceCellularSimsRequestBodySims[];
}
export declare class UpdateDeviceCellularSimsRequest extends SpeakeasyBase {
    requestBody?: UpdateDeviceCellularSimsRequestBody;
    serial: string;
}
export declare class UpdateDeviceCellularSimsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateDeviceCellularSims200ApplicationJSONObject?: Record<string, any>;
}
