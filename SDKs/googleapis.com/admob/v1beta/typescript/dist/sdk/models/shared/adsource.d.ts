import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Definition of a mediation ad source.
 */
export declare class AdSource extends SpeakeasyBase {
    /**
     * ID of this ad source.
     */
    adSourceId?: string;
    /**
     * Resource name of this ad source. Format is: accounts/{publisher_id}/adSources/{ad_source_id}
     */
    name?: string;
    /**
     * Display name of this ad source.
     */
    title?: string;
}
