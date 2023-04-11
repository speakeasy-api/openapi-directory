import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Most likely US 'race'/ethnicity
 */
export declare enum FirstLastNameUSRaceEthnicityOutRaceEthnicityEnum {
    WNl = "W_NL",
    Hl = "HL",
    A = "A",
    BNl = "B_NL",
    AiAn = "AI_AN",
    Pi = "PI"
}
/**
 * Second most likely US 'race'/ethnicity
 */
export declare enum FirstLastNameUSRaceEthnicityOutRaceEthnicityAltEnum {
    WNl = "W_NL",
    Hl = "HL",
    A = "A",
    BNl = "B_NL",
    AiAn = "AI_AN",
    Pi = "PI"
}
/**
 * Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.
 */
export declare class FirstLastNameUSRaceEthnicityOut extends SpeakeasyBase {
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
     * The calibrated probability for raceEthnicity OR raceEthnicityAlt to have been guessed correctly. -1 = still calibrating.
     */
    probabilityAltCalibrated?: number;
    /**
     * The calibrated probability for raceEthnicity to have been guessed correctly. -1 = still calibrating.
     */
    probabilityCalibrated?: number;
    /**
     * List 'race'/ethnicities
     */
    raceEthnicitiesTop?: string[];
    /**
     * Most likely US 'race'/ethnicity
     */
    raceEthnicity?: FirstLastNameUSRaceEthnicityOutRaceEthnicityEnum;
    /**
     * Second most likely US 'race'/ethnicity
     */
    raceEthnicityAlt?: FirstLastNameUSRaceEthnicityOutRaceEthnicityAltEnum;
    /**
     * Higher score is better, but score is not normalized. Use calibratedProbability if available.
     */
    score?: number;
    script?: string;
}
