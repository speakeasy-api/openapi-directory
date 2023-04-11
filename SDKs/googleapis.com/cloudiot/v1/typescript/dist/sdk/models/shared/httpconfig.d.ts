import { SpeakeasyBase } from "../../../internal/utils";
/**
 * If enabled, allows devices to use DeviceService via the HTTP protocol. Otherwise, any requests to DeviceService will fail for this registry.
 */
export declare enum HttpConfigHttpEnabledStateEnum {
    HttpStateUnspecified = "HTTP_STATE_UNSPECIFIED",
    HttpEnabled = "HTTP_ENABLED",
    HttpDisabled = "HTTP_DISABLED"
}
/**
 * The configuration of the HTTP bridge for a device registry.
 */
export declare class HttpConfig extends SpeakeasyBase {
    /**
     * If enabled, allows devices to use DeviceService via the HTTP protocol. Otherwise, any requests to DeviceService will fail for this registry.
     */
    httpEnabledState?: HttpConfigHttpEnabledStateEnum;
}
