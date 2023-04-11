import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The new type of proxy header to append before sending data to the backend. NONE or PROXY_V1 are allowed.
 */
export declare enum TargetSslProxiesSetProxyHeaderRequestProxyHeaderEnum {
    None = "NONE",
    ProxyV1 = "PROXY_V1"
}
export declare class TargetSslProxiesSetProxyHeaderRequest extends SpeakeasyBase {
    /**
     * The new type of proxy header to append before sending data to the backend. NONE or PROXY_V1 are allowed.
     */
    proxyHeader?: TargetSslProxiesSetProxyHeaderRequestProxyHeaderEnum;
}
