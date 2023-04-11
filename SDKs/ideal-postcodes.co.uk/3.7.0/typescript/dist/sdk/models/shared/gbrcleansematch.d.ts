import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Match indicator for the locality
 */
export declare enum GbrCleanseMatchLocalityMatchEnum {
    Full = "FULL",
    Partial = "PARTIAL",
    Incorrect = "INCORRECT",
    Missing = "MISSING",
    Na = "NA"
}
/**
 * Match indicator for the organisation
 */
export declare enum GbrCleanseMatchOrganisationMatchEnum {
    Full = "FULL",
    Partial = "PARTIAL",
    Incorrect = "INCORRECT",
    Missing = "MISSING",
    Na = "NA"
}
/**
 * Match indicator for the post_town
 */
export declare enum GbrCleanseMatchPostTownMatchEnum {
    Full = "FULL",
    Partial = "PARTIAL",
    Incorrect = "INCORRECT",
    Missing = "MISSING",
    Na = "NA"
}
/**
 * Match indicator for the postcode
 */
export declare enum GbrCleanseMatchPostcodeMatchEnum {
    Full = "FULL",
    Partial = "PARTIAL",
    Incorrect = "INCORRECT",
    Missing = "MISSING",
    Na = "NA"
}
/**
 * Match indicator for the premise
 */
export declare enum GbrCleanseMatchPremiseMatchEnum {
    Full = "FULL",
    Partial = "PARTIAL",
    Incorrect = "INCORRECT",
    Missing = "MISSING",
    Na = "NA"
}
/**
 * Match indicator for the street
 */
export declare enum GbrCleanseMatchThoroughfareMatchEnum {
    Full = "FULL",
    Partial = "PARTIAL",
    Incorrect = "INCORRECT",
    Missing = "MISSING",
    Na = "NA"
}
export declare class GbrCleanseMatch extends SpeakeasyBase {
    /**
     * A confidence score represented as number between 1 and 0. 1 indicates a full match. 0 indicates no complete matching elements.
     *
     * @remarks
     *
     */
    confidence: number;
    /**
     * The number of addresses we matched to the input. We return the closest match by default.
     *
     * @remarks
     *
     */
    count: number;
    /**
     * A score represented as number between 1 and 0. Fit compares the address elements present in your query against the matching address elements. It does not incorporate elements you have not presented in the score. A partial address (e.g. 12 Pye Green Road) will have a fit of 1 even though it is missing post town and postcode. Its confidence score will be less than 1 however because it is missing some crucial elements.
     *
     * @remarks
     *
     */
    fit: number;
    /**
     * Match indicator for the locality
     */
    localityMatch: GbrCleanseMatchLocalityMatchEnum;
    /**
     * Nearest matching address
     */
    match: any;
    /**
     * Match indicator for the organisation
     */
    organisationMatch: GbrCleanseMatchOrganisationMatchEnum;
    /**
     * Match indicator for the post_town
     */
    postTownMatch: GbrCleanseMatchPostTownMatchEnum;
    /**
     * Match indicator for the postcode
     */
    postcodeMatch: GbrCleanseMatchPostcodeMatchEnum;
    /**
     * Match indicator for the premise
     */
    premiseMatch: GbrCleanseMatchPremiseMatchEnum;
    /**
     * Originally submitted query
     */
    query: string;
    /**
     * Match indicator for the street
     */
    thoroughfareMatch: GbrCleanseMatchThoroughfareMatchEnum;
}
