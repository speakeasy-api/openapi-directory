import { SpeakeasyBase } from "../../../internal/utils";
import { AdvertiserSdfConfig } from "./advertisersdfconfig";
/**
 * Settings that control how advertiser related data may be accessed.
 */
export declare class AdvertiserDataAccessConfig extends SpeakeasyBase {
    /**
     * Structured Data Files (SDF) settings of an advertiser.
     */
    sdfConfig?: AdvertiserSdfConfig;
}
