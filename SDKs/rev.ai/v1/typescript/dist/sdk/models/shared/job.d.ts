import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Simple reason of why the transcription job failed. Check `failure_detail` for specific details and solutions
 */
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
/**
 * Current status of the job
 */
export declare enum JobStatusEnum {
    InProgress = "in_progress",
    Transcribed = "transcribed",
    Failed = "failed"
}
/**
 * Type of speech recognition performed. Currently the only supported values are 'async' for asynchronous jobs and `stream` for streaming jobs
 */
export declare enum JobTypeEnum {
    Async = "async"
}
/**
 * Rev.ai Transcription Job
 *
 * @remarks
 * ***
 * Note: properties are not displayed in the returned object if they are null
 *
 */
export declare class Job extends SpeakeasyBase {
    callbackUrl?: string;
    /**
     * The date and time the job was completed, whether successfully or failing, in ISO-8601 UTC form
     */
    completedOn?: string;
    /**
     * The date and time the job was created in ISO-8601 UTC form
     */
    createdOn?: string;
    customVocabularyId?: string;
    deleteAfterSeconds?: number;
    /**
     * Duration of the file in seconds. Null if the file could not be retrieved or there was not a valid media file
     */
    durationSeconds?: number;
    /**
     * Simple reason of why the transcription job failed. Check `failure_detail` for specific details and solutions
     */
    failure?: JobFailureEnum;
    /**
     * Human-readable reason why the job failed
     */
    failureDetail?: string;
    filterProfanity?: boolean;
    /**
     * Id of the job
     */
    id?: string;
    language?: JobLanguageEnum;
    mediaUrl?: string;
    metadata?: string;
    /**
     * Name of the file provided. Present when the file name is available
     */
    name?: string;
    removeDisfluencies?: boolean;
    skipDiarization?: boolean;
    skipPunctuation?: boolean;
    speakerChannelsCount?: number;
    /**
     * Current status of the job
     */
    status?: JobStatusEnum;
    /**
     * Type of speech recognition performed. Currently the only supported values are 'async' for asynchronous jobs and `stream` for streaming jobs
     */
    type?: JobTypeEnum;
}
