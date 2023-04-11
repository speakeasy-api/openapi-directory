import { SpeakeasyBase } from "../../../internal/utils";
/**
 * religious-coded names
 */
export declare class PersonalNameReligionedOut extends SpeakeasyBase {
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
     * Most likely religion
     */
    religion?: string;
    /**
     * Second best alternative : religion
     */
    religionAlt?: string;
    /**
     * List countries (top 10)
     */
    religionsTop?: string[];
    /**
     * Higher score is better, but score is not normalized. Use calibratedProbability if available.
     */
    score?: number;
    script?: string;
}
