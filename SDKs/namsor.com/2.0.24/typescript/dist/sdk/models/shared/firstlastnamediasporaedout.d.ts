import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.
 */
export declare class FirstLastNameDiasporaedOut extends SpeakeasyBase {
    /**
     * From input data, the countryIso2 of geographic context (US,CA etc.)
     */
    countryIso2?: string;
    /**
     * List most likely ethnicities (top 10)
     */
    ethnicitiesTop?: string[];
    /**
     * The most likely ethnicity
     */
    ethnicity?: string;
    /**
     * The second best alternative ethnicity
     */
    ethnicityAlt?: string;
    /**
     * The first name (also known as given name)
     */
    firstName?: string;
    id?: string;
    /**
     * The last name (also known as family name, or surname)
     */
    lastName?: string;
    /**
     * Indicates if the output ethnicity is based on machine learning only, or further lifted as a known fact by a country-specific rule. Let us know if you believe ethnicity is incorrect on a specific case where lifted is true.
     */
    lifted?: boolean;
    /**
     * The calibrated probability for ethnicity OR ethnicityAlt to have been guessed correctly. -1 = still calibrating.
     */
    probabilityAltCalibrated?: number;
    /**
     * The calibrated probability for ethnicity to have been guessed correctly. -1 = still calibrating.
     */
    probabilityCalibrated?: number;
    /**
     * Compatibility to NamSor_v1 Diaspora score value. Higher score is better, but score is not normalized. Use calibratedProbability if available.
     */
    score?: number;
    script?: string;
}
