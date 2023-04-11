import { SpeakeasyBase } from "../../../internal/utils";
import { SdfConfig } from "./sdfconfig";
/**
 * Structured Data Files (SDF) settings of an advertiser.
 */
export declare class AdvertiserSdfConfig extends SpeakeasyBase {
    /**
     * Whether or not this advertiser overrides the SDF configuration of its parent partner. By default, an advertiser inherits the SDF configuration from the parent partner. To override the partner configuration, set this field to `true` and provide the new configuration in sdfConfig.
     */
    overridePartnerSdfConfig?: boolean;
    /**
     * Structured Data File (SDF) related settings.
     */
    sdfConfig?: SdfConfig;
}
