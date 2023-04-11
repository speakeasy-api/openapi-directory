import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specification of how client requests are aborted as part of fault injection before being sent to a destination.
 */
export declare class HttpRouteFaultInjectionPolicyAbort extends SpeakeasyBase {
    /**
     * The HTTP status code used to abort the request. The value must be between 200 and 599 inclusive.
     */
    httpStatus?: number;
    /**
     * The percentage of traffic which will be aborted. The value must be between [0, 100]
     */
    percentage?: number;
}
