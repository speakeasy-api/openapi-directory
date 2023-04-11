import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the geographic name origin at a country subclassification level (usually regional or state level).
 */
export declare class FirstLastNameGeoSubclassificationOut extends SpeakeasyBase {
    /**
     * The input country ISO2 code
     */
    countryIso2?: string;
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
     * The calibrated probability for subclassification OR subclassificationAlt to have been guessed correctly. -1 = still calibrating.
     */
    probabilityAltCalibrated?: number;
    /**
     * The calibrated probability for subclassification to have been guessed correctly. -1 = still calibrating.
     */
    probabilityCalibrated?: number;
    /**
     * Compatibility to NamSor_v1 Origin score value. Higher score is better, but score is not normalized. Use calibratedProbability if available.
     */
    score?: number;
    script?: string;
    /**
     * Most likely subclassification ISO_3166-2 code
     */
    subClassification?: string;
    /**
     * Second best alternative : subclassification ISO_3166-2 code
     */
    subClassificationAlt?: string;
    /**
     * List subclassification ISO_3166-2 codes (top 10)
     */
    subclassificationTop?: string[];
}
