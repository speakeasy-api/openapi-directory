import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleApiServiceusageV1ServiceConfig } from "./googleapiserviceusagev1serviceconfig";
/**
 * Whether or not the service has been enabled for use by the consumer.
 */
export declare enum GoogleApiServiceusageV1ServiceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}
/**
 * A service that is available for use by the consumer.
 */
export declare class GoogleApiServiceusageV1Service extends SpeakeasyBase {
    /**
     * The configuration of the service.
     */
    config?: GoogleApiServiceusageV1ServiceConfig;
    /**
     * The resource name of the consumer and service. A valid name would be: - projects/123/services/serviceusage.googleapis.com
     */
    name?: string;
    /**
     * The resource name of the consumer. A valid name would be: - projects/123
     */
    parent?: string;
    /**
     * Whether or not the service has been enabled for use by the consumer.
     */
    state?: GoogleApiServiceusageV1ServiceStateEnum;
}
