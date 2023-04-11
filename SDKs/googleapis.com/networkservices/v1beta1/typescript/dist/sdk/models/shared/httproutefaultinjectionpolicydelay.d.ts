import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specification of how client requests are delayed as part of fault injection before being sent to a destination.
 */
export declare class HttpRouteFaultInjectionPolicyDelay extends SpeakeasyBase {
    /**
     * Specify a fixed delay before forwarding the request.
     */
    fixedDelay?: string;
    /**
     * The percentage of traffic on which delay will be injected. The value must be between [0, 100]
     */
    percentage?: number;
}
