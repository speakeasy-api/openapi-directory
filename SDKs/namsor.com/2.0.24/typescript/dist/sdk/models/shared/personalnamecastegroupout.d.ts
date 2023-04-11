import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Caste group-coded names
 */
export declare class PersonalNameCastegroupOut extends SpeakeasyBase {
    /**
     * Most likely caste group
     */
    castegroup?: string;
    /**
     * Second best alternative : caste group
     */
    castegroupAlt?: string;
    /**
     * List caste group (top 10)
     */
    castegroupTop?: string[];
    id?: string;
    /**
     * The input name.
     */
    name?: string;
    /**
     * The calibrated probability for country OR countryAlt to have been guessed correctly. -1 = still calibrating.
     */
    probabilityAltCalibrated?: number;
    /**
     * The calibrated probability for country to have been guessed correctly. -1 = still calibrating.
     */
    probabilityCalibrated?: number;
    /**
     * Higher score is better, but score is not normalized. Use calibratedProbability if available.
     */
    score?: number;
    script?: string;
}
