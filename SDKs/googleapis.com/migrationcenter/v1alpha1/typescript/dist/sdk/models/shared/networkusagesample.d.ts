import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Network usage sample. Values are across all network interfaces.
 */
export declare class NetworkUsageSample extends SpeakeasyBase {
    /**
     * Average network egress in B/s sampled over a short window. Must be non-negative.
     */
    averageEgressBps?: number;
    /**
     * Average network ingress in B/s sampled over a short window. Must be non-negative.
     */
    averageIngressBps?: number;
}
