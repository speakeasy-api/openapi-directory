import { SpeakeasyBase } from "../../../internal/utils";
import { GrpcRouteFaultInjectionPolicyAbort } from "./grpcroutefaultinjectionpolicyabort";
import { GrpcRouteFaultInjectionPolicyDelay } from "./grpcroutefaultinjectionpolicydelay";
/**
 * The specification for fault injection introduced into traffic to test the resiliency of clients to destination service failure. As part of fault injection, when clients send requests to a destination, delays can be introduced on a percentage of requests before sending those requests to the destination service. Similarly requests from clients can be aborted by for a percentage of requests.
 */
export declare class GrpcRouteFaultInjectionPolicy extends SpeakeasyBase {
    /**
     * Specification of how client requests are aborted as part of fault injection before being sent to a destination.
     */
    abort?: GrpcRouteFaultInjectionPolicyAbort;
    /**
     * Specification of how client requests are delayed as part of fault injection before being sent to a destination.
     */
    delay?: GrpcRouteFaultInjectionPolicyDelay;
}
