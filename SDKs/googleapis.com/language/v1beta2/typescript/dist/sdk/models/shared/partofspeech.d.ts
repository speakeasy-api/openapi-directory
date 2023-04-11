import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The grammatical aspect.
 */
export declare enum PartOfSpeechAspectEnum {
    AspectUnknown = "ASPECT_UNKNOWN",
    Perfective = "PERFECTIVE",
    Imperfective = "IMPERFECTIVE",
    Progressive = "PROGRESSIVE"
}
/**
 * The grammatical case.
 */
export declare enum PartOfSpeechCaseEnum {
    CaseUnknown = "CASE_UNKNOWN",
    Accusative = "ACCUSATIVE",
    Adverbial = "ADVERBIAL",
    Complementive = "COMPLEMENTIVE",
    Dative = "DATIVE",
    Genitive = "GENITIVE",
    Instrumental = "INSTRUMENTAL",
    Locative = "LOCATIVE",
    Nominative = "NOMINATIVE",
    Oblique = "OBLIQUE",
    Partitive = "PARTITIVE",
    Prepositional = "PREPOSITIONAL",
    ReflexiveCase = "REFLEXIVE_CASE",
    RelativeCase = "RELATIVE_CASE",
    Vocative = "VOCATIVE"
}
/**
 * The grammatical form.
 */
export declare enum PartOfSpeechFormEnum {
    FormUnknown = "FORM_UNKNOWN",
    Adnomial = "ADNOMIAL",
    Auxiliary = "AUXILIARY",
    Complementizer = "COMPLEMENTIZER",
    FinalEnding = "FINAL_ENDING",
    Gerund = "GERUND",
    Realis = "REALIS",
    Irrealis = "IRREALIS",
    Short = "SHORT",
    Long = "LONG",
    Order = "ORDER",
    Specific = "SPECIFIC"
}
/**
 * The grammatical gender.
 */
export declare enum PartOfSpeechGenderEnum {
    GenderUnknown = "GENDER_UNKNOWN",
    Feminine = "FEMININE",
    Masculine = "MASCULINE",
    Neuter = "NEUTER"
}
/**
 * The grammatical mood.
 */
export declare enum PartOfSpeechMoodEnum {
    MoodUnknown = "MOOD_UNKNOWN",
    ConditionalMood = "CONDITIONAL_MOOD",
    Imperative = "IMPERATIVE",
    Indicative = "INDICATIVE",
    Interrogative = "INTERROGATIVE",
    Jussive = "JUSSIVE",
    Subjunctive = "SUBJUNCTIVE"
}
/**
 * The grammatical number.
 */
export declare enum PartOfSpeechNumberEnum {
    NumberUnknown = "NUMBER_UNKNOWN",
    Singular = "SINGULAR",
    Plural = "PLURAL",
    Dual = "DUAL"
}
/**
 * The grammatical person.
 */
export declare enum PartOfSpeechPersonEnum {
    PersonUnknown = "PERSON_UNKNOWN",
    First = "FIRST",
    Second = "SECOND",
    Third = "THIRD",
    ReflexivePerson = "REFLEXIVE_PERSON"
}
/**
 * The grammatical properness.
 */
export declare enum PartOfSpeechProperEnum {
    ProperUnknown = "PROPER_UNKNOWN",
    Proper = "PROPER",
    NotProper = "NOT_PROPER"
}
/**
 * The grammatical reciprocity.
 */
export declare enum PartOfSpeechReciprocityEnum {
    ReciprocityUnknown = "RECIPROCITY_UNKNOWN",
    Reciprocal = "RECIPROCAL",
    NonReciprocal = "NON_RECIPROCAL"
}
/**
 * The part of speech tag.
 */
export declare enum PartOfSpeechTagEnum {
    Unknown = "UNKNOWN",
    Adj = "ADJ",
    Adp = "ADP",
    Adv = "ADV",
    Conj = "CONJ",
    Det = "DET",
    Noun = "NOUN",
    Num = "NUM",
    Pron = "PRON",
    Prt = "PRT",
    Punct = "PUNCT",
    Verb = "VERB",
    X = "X",
    Affix = "AFFIX"
}
/**
 * The grammatical tense.
 */
export declare enum PartOfSpeechTenseEnum {
    TenseUnknown = "TENSE_UNKNOWN",
    ConditionalTense = "CONDITIONAL_TENSE",
    Future = "FUTURE",
    Past = "PAST",
    Present = "PRESENT",
    Imperfect = "IMPERFECT",
    Pluperfect = "PLUPERFECT"
}
/**
 * The grammatical voice.
 */
export declare enum PartOfSpeechVoiceEnum {
    VoiceUnknown = "VOICE_UNKNOWN",
    Active = "ACTIVE",
    Causative = "CAUSATIVE",
    Passive = "PASSIVE"
}
/**
 * Represents part of speech information for a token.
 */
export declare class PartOfSpeech extends SpeakeasyBase {
    /**
     * The grammatical aspect.
     */
    aspect?: PartOfSpeechAspectEnum;
    /**
     * The grammatical case.
     */
    case?: PartOfSpeechCaseEnum;
    /**
     * The grammatical form.
     */
    form?: PartOfSpeechFormEnum;
    /**
     * The grammatical gender.
     */
    gender?: PartOfSpeechGenderEnum;
    /**
     * The grammatical mood.
     */
    mood?: PartOfSpeechMoodEnum;
    /**
     * The grammatical number.
     */
    number?: PartOfSpeechNumberEnum;
    /**
     * The grammatical person.
     */
    person?: PartOfSpeechPersonEnum;
    /**
     * The grammatical properness.
     */
    proper?: PartOfSpeechProperEnum;
    /**
     * The grammatical reciprocity.
     */
    reciprocity?: PartOfSpeechReciprocityEnum;
    /**
     * The part of speech tag.
     */
    tag?: PartOfSpeechTagEnum;
    /**
     * The grammatical tense.
     */
    tense?: PartOfSpeechTenseEnum;
    /**
     * The grammatical voice.
     */
    voice?: PartOfSpeechVoiceEnum;
}
