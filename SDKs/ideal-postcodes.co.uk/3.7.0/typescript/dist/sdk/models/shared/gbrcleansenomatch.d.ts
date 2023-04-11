import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GbrCleanseNoMatchConfidenceEnum {
    Zero = "0"
}
export declare enum GbrCleanseNoMatchCountEnum {
    Zero = "0"
}
export declare enum GbrCleanseNoMatchFitEnum {
    Zero = "0"
}
export declare enum GbrCleanseNoMatchLocalityMatchEnum {
    NoMatch = "NO_MATCH"
}
/**
 * Nearest matching address
 */
export declare enum GbrCleanseNoMatchMatchEnum {
    Null = "null"
}
export declare enum GbrCleanseNoMatchOrganisationMatchEnum {
    NoMatch = "NO_MATCH"
}
export declare enum GbrCleanseNoMatchPostTownMatchEnum {
    NoMatch = "NO_MATCH"
}
export declare enum GbrCleanseNoMatchPostcodeMatchEnum {
    NoMatch = "NO_MATCH"
}
export declare enum GbrCleanseNoMatchPremiseMatchEnum {
    NoMatch = "NO_MATCH"
}
export declare enum GbrCleanseNoMatchThoroughfareMatchEnum {
    NoMatch = "NO_MATCH"
}
export declare class GbrCleanseNoMatch extends SpeakeasyBase {
    confidence: GbrCleanseNoMatchConfidenceEnum;
    count: GbrCleanseNoMatchCountEnum;
    fit: GbrCleanseNoMatchFitEnum;
    localityMatch: GbrCleanseNoMatchLocalityMatchEnum;
    /**
     * Nearest matching address
     */
    match: GbrCleanseNoMatchMatchEnum;
    organisationMatch: GbrCleanseNoMatchOrganisationMatchEnum;
    postTownMatch: GbrCleanseNoMatchPostTownMatchEnum;
    postcodeMatch: GbrCleanseNoMatchPostcodeMatchEnum;
    premiseMatch: GbrCleanseNoMatchPremiseMatchEnum;
    /**
     * Originally submitted query
     */
    query: string;
    thoroughfareMatch: GbrCleanseNoMatchThoroughfareMatchEnum;
}
