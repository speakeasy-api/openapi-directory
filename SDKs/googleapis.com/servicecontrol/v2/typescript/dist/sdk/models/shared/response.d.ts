import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This message defines attributes for a typical network response. It generally models semantics of an HTTP response.
 */
export declare class Response extends SpeakeasyBase {
    /**
     * The amount of time it takes the backend service to fully respond to a request. Measured from when the destination service starts to send the request to the backend until when the destination service receives the complete response from the backend.
     */
    backendLatency?: string;
    /**
     * The HTTP response status code, such as `200` and `404`.
     */
    code?: string;
    /**
     * The HTTP response headers. If multiple headers share the same key, they must be merged according to HTTP spec. All header keys must be lowercased, because HTTP header keys are case-insensitive.
     */
    headers?: Record<string, string>;
    /**
     * The HTTP response size in bytes. If unknown, it must be -1.
     */
    size?: string;
    /**
     * The timestamp when the `destination` service sends the last byte of the response.
     */
    time?: string;
}
