import { SpeakeasyBase } from "../../../internal/utils";
import { IpConfig } from "./ipconfig";
/**
 * Describes a Target Proxy that uses this Certificate Map.
 */
export declare class GclbTarget extends SpeakeasyBase {
    /**
     * Output only. IP configurations for this Target Proxy where the Certificate Map is serving.
     */
    ipConfigs?: IpConfig[];
    /**
     * Output only. This field returns the resource name in the following format: `//compute.googleapis.com/projects/* /global/targetHttpsProxies/*`.
     */
    targetHttpsProxy?: string;
    /**
     * Output only. This field returns the resource name in the following format: `//compute.googleapis.com/projects/* /global/targetSslProxies/*`.
     */
    targetSslProxy?: string;
}
