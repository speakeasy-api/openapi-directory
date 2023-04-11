import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Data about the relative number of devices running a given configuration of the Android platform.
 */
export declare class Distribution extends SpeakeasyBase {
    /**
     * Output only. The estimated fraction (0-1) of the total market with this configuration.
     */
    marketShare?: number;
    /**
     * Output only. The time this distribution was measured.
     */
    measurementTime?: string;
}
