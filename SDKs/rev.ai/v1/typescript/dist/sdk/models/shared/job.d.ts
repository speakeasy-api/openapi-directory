import { SpeakeasyBase } from "../../../internal/utils";
export declare enum JobFailureEnum {
    InternalProcessing = "internal_processing",
    DownloadFailure = "download_failure",
    DurationExceeded = "duration_exceeded",
    DurationTooShort = "duration_too_short",
    InvalidMedia = "invalid_media",
    EmptyMedia = "empty_media",
    Transcription = "transcription",
    InsufficientBalance = "insufficient_balance",
    InvoicingLimitExceeded = "invoicing_limit_exceeded"
}
export declare enum JobLanguageEnum {
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
export declare enum JobStatusEnum {
    InProgress = "in_progress",
    Transcribed = "transcribed",
    Failed = "failed"
}
export declare enum JobTypeEnum {
    Async = "async"
}
/**
 * Rev.ai Transcription Job
 * ***
 * Note: properties are not displayed in the returned object if they are null
 *
**/
export declare class Job extends SpeakeasyBase {
    callbackUrl?: string;
    completedOn?: string;
    createdOn?: string;
    customVocabularyId?: string;
    deleteAfterSeconds?: number;
    durationSeconds?: number;
    failure?: JobFailureEnum;
    failureDetail?: string;
    filterProfanity?: boolean;
    id?: string;
    language?: JobLanguageEnum;
    mediaUrl?: string;
    metadata?: string;
    name?: string;
    removeDisfluencies?: boolean;
    skipDiarization?: boolean;
    skipPunctuation?: boolean;
    speakerChannelsCount?: number;
    status?: JobStatusEnum;
    type?: JobTypeEnum;
}
