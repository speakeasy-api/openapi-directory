import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines IP configuration where this Certificate Map is serving.
 */
export declare class IpConfig extends SpeakeasyBase {
    /**
     * Output only. An external IP address.
     */
    ipAddress?: string;
    /**
     * Output only. Ports.
     */
    ports?: number[];
}
