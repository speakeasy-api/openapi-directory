import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specification for how requests are aborted as part of fault injection.
 */
export declare class HttpFaultAbort extends SpeakeasyBase {
    /**
     * The HTTP status code used to abort the request. The value must be from 200 to 599 inclusive. For gRPC protocol, the gRPC status code is mapped to HTTP status code according to this mapping table. HTTP status 200 is mapped to gRPC status UNKNOWN. Injecting an OK status is currently not supported by Traffic Director.
     */
    httpStatus?: number;
    /**
     * The percentage of traffic for connections, operations, or requests that is aborted as part of fault injection. The value must be from 0.0 to 100.0 inclusive.
     */
    percentage?: number;
}
