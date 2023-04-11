import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Most likely gender
 */
export declare enum PersonalNameGenderedOutLikelyGenderEnum {
    Male = "male",
    Female = "female",
    Unknown = "unknown"
}
/**
 * Classified genderized names
 */
export declare class PersonalNameGenderedOut extends SpeakeasyBase {
    /**
     * Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value.
     */
    genderScale?: number;
    id?: string;
    /**
     * Most likely gender
     */
    likelyGender?: PersonalNameGenderedOutLikelyGenderEnum;
    /**
     * The input name
     */
    name?: string;
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
