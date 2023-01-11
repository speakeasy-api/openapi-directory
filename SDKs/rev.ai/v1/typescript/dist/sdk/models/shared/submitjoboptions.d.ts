import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains a collection of phrases. Custom vocabulary informs and biases the speech recognition to find those phrases (at the cost of slightly slower transcription).
**/
export declare class SubmitJobOptionsCustomVocabularies extends SpeakeasyBase {
    phrases: string[];
}
export declare enum SubmitJobOptionsLanguageEnum {
    En = "en",
    Ar = "ar",
    Bg = "bg",
    Ca = "ca",
    Cmn = "cmn",
    Cs = "cs",
    Da = "da",
    De = "de",
    El = "el",
    Es = "es",
    Fi = "fi",
    Fr = "fr",
    Hi = "hi",
    Hr = "hr",
    Hu = "hu",
    It = "it",
    Ja = "ja",
    Ko = "ko",
    Lt = "lt",
    Lv = "lv",
    Ms = "ms",
    Nl = "nl",
    No = "no",
    Pl = "pl",
    Pt = "pt",
    Ro = "ro",
    Ru = "ru",
    Sk = "sk",
    Sl = "sl",
    Sv = "sv",
    Tr = "tr"
}
/**
 * Rev.ai Job Options Object Model
**/
export declare class SubmitJobOptions extends SpeakeasyBase {
    callbackUrl?: string;
    customVocabularies?: SubmitJobOptionsCustomVocabularies[];
    customVocabularyId?: string;
    deleteAfterSeconds?: number;
    filterProfanity?: boolean;
    language?: SubmitJobOptionsLanguageEnum;
    mediaUrl?: string;
    metadata?: string;
    removeDisfluencies?: boolean;
    skipDiarization?: boolean;
    skipPunctuation?: boolean;
    speakerChannelsCount?: number;
}
