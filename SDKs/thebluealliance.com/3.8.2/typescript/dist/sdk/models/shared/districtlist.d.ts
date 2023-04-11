import { SpeakeasyBase } from "../../../internal/utils";
export declare class DistrictList extends SpeakeasyBase {
    /**
     * The short identifier for the district.
     */
    abbreviation: string;
    /**
     * The long name for the district.
     */
    displayName: string;
    /**
     * Key for this district, e.g. `2016ne`.
     */
    key: string;
    /**
     * Year this district participated.
     */
    year: number;
}
