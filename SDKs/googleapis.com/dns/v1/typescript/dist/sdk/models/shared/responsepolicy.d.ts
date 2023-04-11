import { SpeakeasyBase } from "../../../internal/utils";
import { ResponsePolicyGKECluster } from "./responsepolicygkecluster";
import { ResponsePolicyNetwork } from "./responsepolicynetwork";
/**
 * A Response Policy is a collection of selectors that apply to queries made against one or more Virtual Private Cloud networks.
 */
export declare class ResponsePolicy extends SpeakeasyBase {
    /**
     * User-provided description for this Response Policy.
     */
    description?: string;
    /**
     * The list of Google Kubernetes Engine clusters to which this response policy is applied.
     */
    gkeClusters?: ResponsePolicyGKECluster[];
    /**
     * Unique identifier for the resource; defined by the server (output only).
     */
    id?: string;
    kind?: string;
    /**
     * User labels.
     */
    labels?: Record<string, string>;
    /**
     * List of network names specifying networks to which this policy is applied.
     */
    networks?: ResponsePolicyNetwork[];
    /**
     * User assigned name for this Response Policy.
     */
    responsePolicyName?: string;
}
