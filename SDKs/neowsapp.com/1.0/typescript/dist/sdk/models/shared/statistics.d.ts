import { SpeakeasyBase } from "../../../internal/utils";
import { Url } from "./url";
/**
 * OK
 */
export declare class Statistics extends SpeakeasyBase {
    /**
     * Number of Close Approach listings across all NEOs listed in NeoWs
     */
    closeApproachCount?: number;
    /**
     * TimeStamp the last time the DB was updated
     */
    lastUpdated?: string;
    nasaJplUrl?: Url;
    /**
     * Number of NearEarthObjects listed in NeoWs
     */
    nearEarthObjectCount?: number;
    source?: string;
}
