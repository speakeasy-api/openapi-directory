import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains a collection of phrases. Custom vocabulary informs and biases the speech recognition to find those phrases (at the cost of slightly slower transcription).
 */
export declare class SubmitJobMediaUrlOptionsCustomVocabularies extends SpeakeasyBase {
    /**
     * Array of phrases not found in normal dictionary. Add technical jargon, proper nouns and uncommon phrases as strings in this array to add them to the lexicon for this job.
     *
     * @remarks
     *
     * A phrase must contain at least 1 alpha character but may contain any non-numeric character from the Basic Latin set. A phrase can contain up to 12 words. Each word can contain up to 34 characters.
     *
     * **Note**: Only 6000 phrases can be used per transcription job. For more details, check [Custom Vocabularies](https://www.rev.ai/docs/overview#section/Features/Custom-Vocabularies).
     *
     */
    phrases: string[];
}
export declare enum SubmitJobMediaUrlOptionsLanguageEnum {
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
 */
export declare class SubmitJobMediaUrlOptions extends SpeakeasyBase {
    callbackUrl?: string;
    customVocabularies?: SubmitJobMediaUrlOptionsCustomVocabularies[];
    customVocabularyId?: string;
    deleteAfterSeconds?: number;
    filterProfanity?: boolean;
    language?: SubmitJobMediaUrlOptionsLanguageEnum;
    mediaUrl: string;
    metadata?: string;
    removeDisfluencies?: boolean;
    skipDiarization?: boolean;
    skipPunctuation?: boolean;
    speakerChannelsCount?: number;
}
