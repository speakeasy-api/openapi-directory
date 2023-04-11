import { SpeakeasyBase } from "../../../internal/utils";
import { CustomVoiceParams } from "./customvoiceparams";
/**
 * The preferred gender of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and name. Note that this is only a preference, not requirement; if a voice of the appropriate gender is not available, the synthesizer should substitute a voice with a different gender rather than failing the request.
 */
export declare enum VoiceSelectionParamsSsmlGenderEnum {
    SsmlVoiceGenderUnspecified = "SSML_VOICE_GENDER_UNSPECIFIED",
    Male = "MALE",
    Female = "FEMALE",
    Neutral = "NEUTRAL"
}
/**
 * Description of which voice to use for a synthesis request.
 */
export declare class VoiceSelectionParams extends SpeakeasyBase {
    /**
     * Description of the custom voice to be synthesized.
     */
    customVoice?: CustomVoiceParams;
    /**
     * Required. The language (and potentially also the region) of the voice expressed as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag, e.g. "en-US". This should not include a script tag (e.g. use "cmn-cn" rather than "cmn-Hant-cn"), because the script will be inferred from the input provided in the SynthesisInput. The TTS service will use this parameter to help choose an appropriate voice. Note that the TTS service may choose a voice with a slightly different language code than the one selected; it may substitute a different region (e.g. using en-US rather than en-CA if there isn't a Canadian voice available), or even a different language, e.g. using "nb" (Norwegian Bokmal) instead of "no" (Norwegian)".
     */
    languageCode?: string;
    /**
     * The name of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and gender.
     */
    name?: string;
    /**
     * The preferred gender of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and name. Note that this is only a preference, not requirement; if a voice of the appropriate gender is not available, the synthesizer should substitute a voice with a different gender rather than failing the request.
     */
    ssmlGender?: VoiceSelectionParamsSsmlGenderEnum;
}
