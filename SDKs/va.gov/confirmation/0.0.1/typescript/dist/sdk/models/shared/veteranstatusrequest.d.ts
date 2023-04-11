import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optional gender of M or F for the person of interest
 */
export declare enum VeteranStatusRequestGenderEnum {
    M = "M",
    F = "F"
}
/**
 * Attributes required to retrieve a Veteran's status
 */
export declare class VeteranStatusRequest extends SpeakeasyBase {
    /**
     * Birth date for the person of interest in any valid ISO8601 format
     */
    birthDate: string;
    /**
     * First name for the person of interest
     */
    firstName: string;
    /**
     * Optional gender of M or F for the person of interest
     */
    gender?: VeteranStatusRequestGenderEnum;
    /**
     * Last name for the person of interest
     */
    lastName: string;
    /**
     * Optional middle name for the person of interest
     */
    middleName?: string;
    /**
     * Social Security Number for the person of interest with or without dashes
     */
    ssn: string;
}
