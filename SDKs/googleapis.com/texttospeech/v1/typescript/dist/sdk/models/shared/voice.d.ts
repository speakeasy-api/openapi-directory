import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The gender of this voice.
 */
export declare enum VoiceSsmlGenderEnum {
    SsmlVoiceGenderUnspecified = "SSML_VOICE_GENDER_UNSPECIFIED",
    Male = "MALE",
    Female = "FEMALE",
    Neutral = "NEUTRAL"
}
/**
 * Description of a voice supported by the TTS service.
 */
export declare class Voice extends SpeakeasyBase {
    /**
     * The languages that this voice supports, expressed as [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tags (e.g. "en-US", "es-419", "cmn-tw").
     */
    languageCodes?: string[];
    /**
     * The name of this voice. Each distinct voice has a unique name.
     */
    name?: string;
    /**
     * The natural sample rate (in hertz) for this voice.
     */
    naturalSampleRateHertz?: number;
    /**
     * The gender of this voice.
     */
    ssmlGender?: VoiceSsmlGenderEnum;
}
