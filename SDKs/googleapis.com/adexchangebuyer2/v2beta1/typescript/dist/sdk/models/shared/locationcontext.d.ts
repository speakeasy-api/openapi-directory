import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The Geo criteria the restriction applies to.
 */
export declare class LocationContext extends SpeakeasyBase {
    /**
     * IDs representing the geo location for this context. Refer to the [geo-table.csv](https://storage.googleapis.com/adx-rtb-dictionaries/geo-table.csv) file for different geo criteria IDs.
     */
    geoCriteriaIds?: number[];
}
