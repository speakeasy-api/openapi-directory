import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceConfig } from "./serviceconfig";
/**
 * Whether or not the service has been enabled for use by the consumer.
 */
export declare enum ServiceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}
/**
 * A service that is available for use by the consumer.
 */
export declare class Service extends SpeakeasyBase {
    /**
     * The configuration of the service.
     */
    config?: ServiceConfig;
    /**
     * The resource name of the consumer and service. A valid name would be: - `projects/123/services/serviceusage.googleapis.com`
     */
    name?: string;
    /**
     * The resource name of the consumer. A valid name would be: - `projects/123`
     */
    parent?: string;
    /**
     * Whether or not the service has been enabled for use by the consumer.
     */
    state?: ServiceStateEnum;
}
