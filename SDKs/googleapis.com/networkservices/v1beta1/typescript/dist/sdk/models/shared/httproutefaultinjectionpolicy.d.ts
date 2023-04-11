import { SpeakeasyBase } from "../../../internal/utils";
import { HttpRouteFaultInjectionPolicyAbort } from "./httproutefaultinjectionpolicyabort";
import { HttpRouteFaultInjectionPolicyDelay } from "./httproutefaultinjectionpolicydelay";
/**
 * The specification for fault injection introduced into traffic to test the resiliency of clients to destination service failure. As part of fault injection, when clients send requests to a destination, delays can be introduced by client proxy on a percentage of requests before sending those requests to the destination service. Similarly requests can be aborted by client proxy for a percentage of requests.
 */
export declare class HttpRouteFaultInjectionPolicy extends SpeakeasyBase {
    /**
     * Specification of how client requests are aborted as part of fault injection before being sent to a destination.
     */
    abort?: HttpRouteFaultInjectionPolicyAbort;
    /**
     * Specification of how client requests are delayed as part of fault injection before being sent to a destination.
     */
    delay?: HttpRouteFaultInjectionPolicyDelay;
}
