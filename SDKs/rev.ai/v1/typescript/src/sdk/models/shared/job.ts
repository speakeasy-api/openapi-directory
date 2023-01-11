import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum JobFailureEnum {
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

export enum JobLanguageEnum {
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

export enum JobStatusEnum {
    InProgress = "in_progress",
    Transcribed = "transcribed",
    Failed = "failed"
}

export enum JobTypeEnum {
    Async = "async"
}


// Job
/** 
 * Rev.ai Transcription Job
 * ***
 * Note: properties are not displayed in the returned object if they are null
 * 
**/
export class Job extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callback_url" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=completed_on" })
  completedOn?: string;

  @SpeakeasyMetadata({ data: "json, name=created_on" })
  createdOn?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_vocabulary_id" })
  customVocabularyId?: string;

  @SpeakeasyMetadata({ data: "json, name=delete_after_seconds" })
  deleteAfterSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=duration_seconds" })
  durationSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=failure" })
  failure?: JobFailureEnum;

  @SpeakeasyMetadata({ data: "json, name=failure_detail" })
  failureDetail?: string;

  @SpeakeasyMetadata({ data: "json, name=filter_profanity" })
  filterProfanity?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: JobLanguageEnum;

  @SpeakeasyMetadata({ data: "json, name=media_url" })
  mediaUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=remove_disfluencies" })
  removeDisfluencies?: boolean;

  @SpeakeasyMetadata({ data: "json, name=skip_diarization" })
  skipDiarization?: boolean;

  @SpeakeasyMetadata({ data: "json, name=skip_punctuation" })
  skipPunctuation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=speaker_channels_count" })
  speakerChannelsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: JobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: JobTypeEnum;
}
