import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Arabic exception.
 */
export declare enum LanguagesSpokenArabicSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Cantonese exception.
 */
export declare enum LanguagesSpokenCantoneseSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Dutch exception.
 */
export declare enum LanguagesSpokenDutchSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * English exception.
 */
export declare enum LanguagesSpokenEnglishSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Filipino exception.
 */
export declare enum LanguagesSpokenFilipinoSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * French exception.
 */
export declare enum LanguagesSpokenFrenchSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * German exception.
 */
export declare enum LanguagesSpokenGermanSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Hindi exception.
 */
export declare enum LanguagesSpokenHindiSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Indonesian exception.
 */
export declare enum LanguagesSpokenIndonesianSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Italian exception.
 */
export declare enum LanguagesSpokenItalianSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Japanese exception.
 */
export declare enum LanguagesSpokenJapaneseSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Korean exception.
 */
export declare enum LanguagesSpokenKoreanSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Mandarin exception.
 */
export declare enum LanguagesSpokenMandarinSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Portuguese exception.
 */
export declare enum LanguagesSpokenPortugueseSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Russian exception.
 */
export declare enum LanguagesSpokenRussianSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Spanish exception.
 */
export declare enum LanguagesSpokenSpanishSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Vietnamese exception.
 */
export declare enum LanguagesSpokenVietnameseSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Languages spoken by at least one staff member.
 */
export declare class LanguagesSpoken extends SpeakeasyBase {
    /**
     * Arabic. At least one staff member speaks Arabic.
     */
    arabicSpoken?: boolean;
    /**
     * Arabic exception.
     */
    arabicSpokenException?: LanguagesSpokenArabicSpokenExceptionEnum;
    /**
     * Cantonese. At least one staff member speaks Cantonese.
     */
    cantoneseSpoken?: boolean;
    /**
     * Cantonese exception.
     */
    cantoneseSpokenException?: LanguagesSpokenCantoneseSpokenExceptionEnum;
    /**
     * Dutch. At least one staff member speaks Dutch.
     */
    dutchSpoken?: boolean;
    /**
     * Dutch exception.
     */
    dutchSpokenException?: LanguagesSpokenDutchSpokenExceptionEnum;
    /**
     * English. At least one staff member speaks English.
     */
    englishSpoken?: boolean;
    /**
     * English exception.
     */
    englishSpokenException?: LanguagesSpokenEnglishSpokenExceptionEnum;
    /**
     * Filipino. At least one staff member speaks Filipino.
     */
    filipinoSpoken?: boolean;
    /**
     * Filipino exception.
     */
    filipinoSpokenException?: LanguagesSpokenFilipinoSpokenExceptionEnum;
    /**
     * French. At least one staff member speaks French.
     */
    frenchSpoken?: boolean;
    /**
     * French exception.
     */
    frenchSpokenException?: LanguagesSpokenFrenchSpokenExceptionEnum;
    /**
     * German. At least one staff member speaks German.
     */
    germanSpoken?: boolean;
    /**
     * German exception.
     */
    germanSpokenException?: LanguagesSpokenGermanSpokenExceptionEnum;
    /**
     * Hindi. At least one staff member speaks Hindi.
     */
    hindiSpoken?: boolean;
    /**
     * Hindi exception.
     */
    hindiSpokenException?: LanguagesSpokenHindiSpokenExceptionEnum;
    /**
     * Indonesian. At least one staff member speaks Indonesian.
     */
    indonesianSpoken?: boolean;
    /**
     * Indonesian exception.
     */
    indonesianSpokenException?: LanguagesSpokenIndonesianSpokenExceptionEnum;
    /**
     * Italian. At least one staff member speaks Italian.
     */
    italianSpoken?: boolean;
    /**
     * Italian exception.
     */
    italianSpokenException?: LanguagesSpokenItalianSpokenExceptionEnum;
    /**
     * Japanese. At least one staff member speaks Japanese.
     */
    japaneseSpoken?: boolean;
    /**
     * Japanese exception.
     */
    japaneseSpokenException?: LanguagesSpokenJapaneseSpokenExceptionEnum;
    /**
     * Korean. At least one staff member speaks Korean.
     */
    koreanSpoken?: boolean;
    /**
     * Korean exception.
     */
    koreanSpokenException?: LanguagesSpokenKoreanSpokenExceptionEnum;
    /**
     * Mandarin. At least one staff member speaks Mandarin.
     */
    mandarinSpoken?: boolean;
    /**
     * Mandarin exception.
     */
    mandarinSpokenException?: LanguagesSpokenMandarinSpokenExceptionEnum;
    /**
     * Portuguese. At least one staff member speaks Portuguese.
     */
    portugueseSpoken?: boolean;
    /**
     * Portuguese exception.
     */
    portugueseSpokenException?: LanguagesSpokenPortugueseSpokenExceptionEnum;
    /**
     * Russian. At least one staff member speaks Russian.
     */
    russianSpoken?: boolean;
    /**
     * Russian exception.
     */
    russianSpokenException?: LanguagesSpokenRussianSpokenExceptionEnum;
    /**
     * Spanish. At least one staff member speaks Spanish.
     */
    spanishSpoken?: boolean;
    /**
     * Spanish exception.
     */
    spanishSpokenException?: LanguagesSpokenSpanishSpokenExceptionEnum;
    /**
     * Vietnamese. At least one staff member speaks Vietnamese.
     */
    vietnameseSpoken?: boolean;
    /**
     * Vietnamese exception.
     */
    vietnameseSpokenException?: LanguagesSpokenVietnameseSpokenExceptionEnum;
}
