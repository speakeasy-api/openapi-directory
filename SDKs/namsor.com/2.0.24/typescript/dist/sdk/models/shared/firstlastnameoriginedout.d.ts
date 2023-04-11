import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the output of inferring the LIKELY country of Origin from a personal name.
 */
export declare class FirstLastNameOriginedOut extends SpeakeasyBase {
    /**
     * List countries of Origin (top 10)
     */
    countriesOriginTop?: string[];
    /**
     * Most likely country of Origin
     */
    countryOrigin?: string;
    /**
     * Second best alternative : country of Origin
     */
    countryOriginAlt?: string;
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
     * The calibrated probability for countryOrigin OR countryOriginAlt to have been guessed correctly. -1 = still calibrating.
     */
    probabilityAltCalibrated?: number;
    /**
     * The calibrated probability for countryOrigin to have been guessed correctly. -1 = still calibrating.
     */
    probabilityCalibrated?: number;
    /**
     * Most likely region of Origin (based on countryOrigin ISO2 code)
     */
    regionOrigin?: string;
    /**
     * Compatibility to NamSor_v1 Origin score value. Higher score is better, but score is not normalized. Use calibratedProbability if available.
     */
    score?: number;
    script?: string;
    /**
     * Most likely sub region of Origin (based on countryOrigin ISO2 code)
     */
    subRegionOrigin?: string;
    /**
     * Most likely top region of Origin (based on countryOrigin ISO2 code)
     */
    topRegionOrigin?: string;
}
