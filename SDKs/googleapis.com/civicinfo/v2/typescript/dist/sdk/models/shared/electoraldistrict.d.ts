import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The geographic scope of this district. If unspecified the district's geography is not known. One of: national, statewide, congressional, stateUpper, stateLower, countywide, judicial, schoolBoard, cityWide, township, countyCouncil, cityCouncil, ward, special
 */
export declare enum ElectoralDistrictScopeEnum {
    Statewide = "statewide",
    Congressional = "congressional",
    StateUpper = "stateUpper",
    StateLower = "stateLower",
    Countywide = "countywide",
    Judicial = "judicial",
    SchoolBoard = "schoolBoard",
    Citywide = "citywide",
    Special = "special",
    CountyCouncil = "countyCouncil",
    Township = "township",
    Ward = "ward",
    CityCouncil = "cityCouncil",
    National = "national"
}
/**
 * Describes the geographic scope of a contest.
 */
export declare class ElectoralDistrict extends SpeakeasyBase {
    /**
     * An identifier for this district, relative to its scope. For example, the 34th State Senate district would have id "34" and a scope of stateUpper.
     */
    id?: string;
    /**
     * The name of the district.
     */
    name?: string;
    /**
     * The geographic scope of this district. If unspecified the district's geography is not known. One of: national, statewide, congressional, stateUpper, stateLower, countywide, judicial, schoolBoard, cityWide, township, countyCouncil, cityCouncil, ward, special
     */
    scope?: ElectoralDistrictScopeEnum;
}
