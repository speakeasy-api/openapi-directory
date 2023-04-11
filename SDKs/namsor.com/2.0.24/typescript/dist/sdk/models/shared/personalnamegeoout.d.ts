import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Classified geo names
 */
export declare class PersonalNameGeoOut extends SpeakeasyBase {
    /**
     * List countries (top 10)
     */
    countriesTop?: string[];
    /**
     * Most likely country
     */
    country?: string;
    /**
     * Second best alternative : country
     */
    countryAlt?: string;
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
     * Most likely region (based on country ISO2 code)
     */
    region?: string;
    /**
     * Higher score is better, but score is not normalized. Use calibratedProbability if available.
     */
    score?: number;
    script?: string;
    /**
     * Most likely sub region (based on country ISO2 code)
     */
    subRegion?: string;
    /**
     * Most likely top region (based on country ISO2 code)
     */
    topRegion?: string;
}
