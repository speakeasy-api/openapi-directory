import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
export declare enum OfficeLevelsEnum {
    International = "international",
    Country = "country",
    AdministrativeArea1 = "administrativeArea1",
    Regional = "regional",
    AdministrativeArea2 = "administrativeArea2",
    Locality = "locality",
    SubLocality1 = "subLocality1",
    SubLocality2 = "subLocality2",
    Special = "special"
}
export declare enum OfficeRolesEnum {
    HeadOfState = "headOfState",
    HeadOfGovernment = "headOfGovernment",
    DeputyHeadOfGovernment = "deputyHeadOfGovernment",
    GovernmentOfficer = "governmentOfficer",
    ExecutiveCouncil = "executiveCouncil",
    LegislatorUpperBody = "legislatorUpperBody",
    LegislatorLowerBody = "legislatorLowerBody",
    HighestCourtJudge = "highestCourtJudge",
    Judge = "judge",
    SchoolBoard = "schoolBoard",
    SpecialPurposeOfficer = "specialPurposeOfficer",
    OtherRole = "otherRole"
}
/**
 * Information about an Office held by one or more Officials.
 */
export declare class Office extends SpeakeasyBase {
    /**
     * The OCD ID of the division with which this office is associated.
     */
    divisionId?: string;
    /**
     * The levels of government of which this office is part. There may be more than one in cases where a jurisdiction effectively acts at two different levels of government; for example, the mayor of the District of Columbia acts at "locality" level, but also effectively at both "administrative-area-2" and "administrative-area-1".
     */
    levels?: OfficeLevelsEnum[];
    /**
     * The human-readable name of the office.
     */
    name?: string;
    /**
     * List of indices in the officials array of people who presently hold this office.
     */
    officialIndices?: number[];
    /**
     * The roles which this office fulfills. Roles are not meant to be exhaustive, or to exactly specify the entire set of responsibilities of a given office, but are meant to be rough categories that are useful for general selection from or sorting of a list of offices.
     */
    roles?: OfficeRolesEnum[];
    /**
     * A list of sources for this office. If multiple sources are listed, the data has been aggregated from those sources.
     */
    sources?: Source[];
}
