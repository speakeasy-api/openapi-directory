import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Endpoint config for this cluster
**/
export declare class EndpointConfig extends SpeakeasyBase {
    enableHttpPortAccess?: boolean;
    httpPorts?: Record<string, string>;
}
/**
 * Endpoint config for this cluster
**/
export declare class EndpointConfigInput extends SpeakeasyBase {
    enableHttpPortAccess?: boolean;
}
