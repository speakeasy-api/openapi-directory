import { SpeakeasyBase } from "../../../internal/utils";
export declare class UDPHealthCheck extends SpeakeasyBase {
    /**
     * The UDP port number to which the health check prober sends packets. Valid values are 1 through 65535.
     */
    port?: number;
    /**
     * Not supported.
     */
    portName?: string;
    /**
     * Raw data of request to send in payload of UDP packet. It is an error if this is empty. The request data can only be ASCII.
     */
    request?: string;
    /**
     * The bytes to match against the beginning of the response data. It is an error if this is empty. The response data can only be ASCII.
     */
    response?: string;
}
