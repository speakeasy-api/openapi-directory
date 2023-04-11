import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The specified Istio auth mode, either none, or mutual TLS.
 */
export declare enum IstioConfigAuthEnum {
    AuthNone = "AUTH_NONE",
    AuthMutualTls = "AUTH_MUTUAL_TLS"
}
/**
 * Configuration options for Istio addon.
 */
export declare class IstioConfig extends SpeakeasyBase {
    /**
     * The specified Istio auth mode, either none, or mutual TLS.
     */
    auth?: IstioConfigAuthEnum;
    /**
     * Whether Istio is enabled for this cluster.
     */
    disabled?: boolean;
}
