import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { Trace } from "./trace";
/**
 * The overall result of the test's configuration analysis.
 */
export declare enum ReachabilityDetailsResultEnum {
    ResultUnspecified = "RESULT_UNSPECIFIED",
    Reachable = "REACHABLE",
    Unreachable = "UNREACHABLE",
    Ambiguous = "AMBIGUOUS",
    Undetermined = "UNDETERMINED"
}
/**
 * Results of the configuration analysis from the last run of the test.
 */
export declare class ReachabilityDetails extends SpeakeasyBase {
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: Status;
    /**
     * The overall result of the test's configuration analysis.
     */
    result?: ReachabilityDetailsResultEnum;
    /**
     * Result may contain a list of traces if a test has multiple possible paths in the network, such as when destination endpoint is a load balancer with multiple backends.
     */
    traces?: Trace[];
    /**
     * The time of the configuration analysis.
     */
    verifyTime?: string;
}
