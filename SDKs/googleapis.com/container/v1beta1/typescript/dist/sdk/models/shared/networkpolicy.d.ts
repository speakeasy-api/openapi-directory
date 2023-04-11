import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The selected network policy provider.
 */
export declare enum NetworkPolicyProviderEnum {
    ProviderUnspecified = "PROVIDER_UNSPECIFIED",
    Calico = "CALICO"
}
/**
 * Configuration options for the NetworkPolicy feature. https://kubernetes.io/docs/concepts/services-networking/networkpolicies/
 */
export declare class NetworkPolicy extends SpeakeasyBase {
    /**
     * Whether network policy is enabled on the cluster.
     */
    enabled?: boolean;
    /**
     * The selected network policy provider.
     */
    provider?: NetworkPolicyProviderEnum;
}
