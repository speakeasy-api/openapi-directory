import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Endpoint config for this cluster
 */
export declare class EndpointConfigInput extends SpeakeasyBase {
    /**
     * Optional. If true, enable http access to specific ports on the cluster from external sources. Defaults to false.
     */
    enableHttpPortAccess?: boolean;
}
/**
 * Endpoint config for this cluster
 */
export declare class EndpointConfig extends SpeakeasyBase {
    /**
     * Optional. If true, enable http access to specific ports on the cluster from external sources. Defaults to false.
     */
    enableHttpPortAccess?: boolean;
    /**
     * Output only. The map of port descriptions to URLs. Will only be populated if enable_http_port_access is true.
     */
    httpPorts?: Record<string, string>;
}
