import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The ingress settings for version or service.
 */
export declare enum NetworkSettingsIngressTrafficAllowedEnum {
    IngressTrafficAllowedUnspecified = "INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED",
    IngressTrafficAllowedAll = "INGRESS_TRAFFIC_ALLOWED_ALL",
    IngressTrafficAllowedInternalOnly = "INGRESS_TRAFFIC_ALLOWED_INTERNAL_ONLY",
    IngressTrafficAllowedInternalAndLb = "INGRESS_TRAFFIC_ALLOWED_INTERNAL_AND_LB"
}
/**
 * A NetworkSettings resource is a container for ingress settings for a version or service.
 */
export declare class NetworkSettings extends SpeakeasyBase {
    /**
     * The ingress settings for version or service.
     */
    ingressTrafficAllowed?: NetworkSettingsIngressTrafficAllowedEnum;
}
