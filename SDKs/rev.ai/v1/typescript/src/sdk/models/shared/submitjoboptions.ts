import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SubmitJobOptionsCustomVocabularies
/** 
 * Contains a collection of phrases. Custom vocabulary informs and biases the speech recognition to find those phrases (at the cost of slightly slower transcription).
**/
export class SubmitJobOptionsCustomVocabularies extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=phrases" })
  phrases: string[];
}

export enum SubmitJobOptionsLanguageEnum {
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


// SubmitJobOptions
/** 
 * Rev.ai Job Options Object Model
**/
export class SubmitJobOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callback_url" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_vocabularies", elemType: SubmitJobOptionsCustomVocabularies })
  customVocabularies?: SubmitJobOptionsCustomVocabularies[];

  @SpeakeasyMetadata({ data: "json, name=custom_vocabulary_id" })
  customVocabularyId?: string;

  @SpeakeasyMetadata({ data: "json, name=delete_after_seconds" })
  deleteAfterSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=filter_profanity" })
  filterProfanity?: boolean;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: SubmitJobOptionsLanguageEnum;

  @SpeakeasyMetadata({ data: "json, name=media_url" })
  mediaUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: string;

  @SpeakeasyMetadata({ data: "json, name=remove_disfluencies" })
  removeDisfluencies?: boolean;

  @SpeakeasyMetadata({ data: "json, name=skip_diarization" })
  skipDiarization?: boolean;

  @SpeakeasyMetadata({ data: "json, name=skip_punctuation" })
  skipPunctuation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=speaker_channels_count" })
  speakerChannelsCount?: number;
}
