import { SpeakeasyBase } from "../../../internal/utils";
import { NameFound } from "./namefound";
/**
 * Person gender
 */
export declare enum SummaryGenderEnum {
    Male = "male",
    Female = "female"
}
/**
 * Indicates whether a person was found, found as dead or not found at all
 */
export declare enum SummaryIdentityStatusEnum {
    Found = "found",
    NotFound = "not_found",
    Dead = "dead"
}
/**
 * Represents a background check summary
 */
export declare class Summary extends SpeakeasyBase {
    /**
     * Person date of birth in RFC3339 format
     */
    dateOfBirth?: Date;
    /**
     * Person date of death
     */
    deathDate?: Date;
    /**
     * Person driver's license
     */
    driversLicense?: string;
    /**
     * Person gender
     */
    gender?: SummaryGenderEnum;
    /**
     * Indicates whether a person was found, found as dead or not found at all
     */
    identityStatus?: SummaryIdentityStatusEnum;
    /**
     * Names found during the background check process
     */
    namesFound: NameFound[];
    /**
     * Social security number of the person (Mexico)
     */
    nss?: string;
    /**
     * Federal taxpayer registration number of the person
     */
    rfc?: string;
}
