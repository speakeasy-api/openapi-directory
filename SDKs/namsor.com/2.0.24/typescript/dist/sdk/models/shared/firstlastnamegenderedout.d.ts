import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Most likely gender
 */
export declare enum FirstLastNameGenderedOutLikelyGenderEnum {
    Male = "male",
    Female = "female",
    Unknown = "unknown"
}
/**
 * Represents the output of inferring the LIKELY gender from a personal name.
 */
export declare class FirstLastNameGenderedOut extends SpeakeasyBase {
    /**
     * The first name (also known as given name)
     */
    firstName?: string;
    /**
     * Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value.
     */
    genderScale?: number;
    id?: string;
    /**
     * The last name (also known as family name, or surname)
     */
    lastName?: string;
    /**
     * Most likely gender
     */
    likelyGender?: FirstLastNameGenderedOutLikelyGenderEnum;
    /**
     * The calibrated probability for inferred gender to have been guessed correctly. -1 = still calibrating.
     */
    probabilityCalibrated?: number;
    /**
     * Compatibility to NamSor_v1 Gender score value. Higher score is better, but score is not normalized. Use calibratedProbability if available.
     */
    score?: number;
    script?: string;
}
