import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration options for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster.
 */
export declare class HttpLoadBalancing extends SpeakeasyBase {
    /**
     * Whether the HTTP Load Balancing controller is enabled in the cluster. When enabled, it runs a small pod in the cluster that manages the load balancers.
     */
    disabled?: boolean;
}
