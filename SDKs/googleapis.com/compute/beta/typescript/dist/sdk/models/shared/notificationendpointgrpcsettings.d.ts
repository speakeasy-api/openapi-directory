import { SpeakeasyBase } from "../../../internal/utils";
import { Duration } from "./duration";
/**
 * Represents a gRPC setting that describes one gRPC notification endpoint and the retry duration attempting to send notification to this endpoint.
 */
export declare class NotificationEndpointGrpcSettings extends SpeakeasyBase {
    /**
     * Optional. If specified, this field is used to set the authority header by the sender of notifications. See https://tools.ietf.org/html/rfc7540#section-8.1.2.3
     */
    authority?: string;
    /**
     * Endpoint to which gRPC notifications are sent. This must be a valid gRPCLB DNS name.
     */
    endpoint?: string;
    /**
     * Optional. If specified, this field is used to populate the "name" field in gRPC requests.
     */
    payloadName?: string;
    /**
     * A Duration represents a fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". Range is approximately 10,000 years.
     */
    resendInterval?: Duration;
    /**
     * How much time (in seconds) is spent attempting notification retries until a successful response is received. Default is 30s. Limit is 20m (1200s). Must be a positive number.
     */
    retryDurationSec?: number;
}
