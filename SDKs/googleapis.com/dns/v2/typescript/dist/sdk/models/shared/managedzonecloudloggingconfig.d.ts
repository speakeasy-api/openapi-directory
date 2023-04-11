import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Cloud Logging configurations for publicly visible zones.
 */
export declare class ManagedZoneCloudLoggingConfig extends SpeakeasyBase {
    /**
     * If set, enable query logging for this ManagedZone. False by default, making logging opt-in.
     */
    enableLogging?: boolean;
    kind?: string;
}
