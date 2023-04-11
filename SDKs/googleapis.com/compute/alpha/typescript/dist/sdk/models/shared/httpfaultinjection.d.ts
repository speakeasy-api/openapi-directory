import { SpeakeasyBase } from "../../../internal/utils";
import { HttpFaultAbort } from "./httpfaultabort";
import { HttpFaultDelay } from "./httpfaultdelay";
/**
 * The specification for fault injection introduced into traffic to test the resiliency of clients to backend service failure. As part of fault injection, when clients send requests to a backend service, delays can be introduced by the load balancer on a percentage of requests before sending those request to the backend service. Similarly requests from clients can be aborted by the load balancer for a percentage of requests.
 */
export declare class HttpFaultInjection extends SpeakeasyBase {
    /**
     * Specification for how requests are aborted as part of fault injection.
     */
    abort?: HttpFaultAbort;
    /**
     * Specifies the delay introduced by the load balancer before forwarding the request to the backend service as part of fault injection.
     */
    delay?: HttpFaultDelay;
}
