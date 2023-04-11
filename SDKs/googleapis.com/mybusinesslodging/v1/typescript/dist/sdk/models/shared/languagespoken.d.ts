import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Spoken exception.
 */
export declare enum LanguageSpokenSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Language spoken by at least one staff member.
 */
export declare class LanguageSpoken extends SpeakeasyBase {
    /**
     * Required. The BCP-47 language code for the spoken language. Currently accepted codes: ar, de, en, es, fil, fr, hi, id, it, ja, ko, nl, pt, ru, vi, yue, zh.
     */
    languageCode?: string;
    /**
     * At least one member of the staff can speak the language.
     */
    spoken?: boolean;
    /**
     * Spoken exception.
     */
    spokenException?: LanguageSpokenSpokenExceptionEnum;
}
