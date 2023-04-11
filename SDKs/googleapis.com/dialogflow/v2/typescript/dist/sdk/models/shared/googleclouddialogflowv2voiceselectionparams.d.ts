import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optional. The preferred gender of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and name. Note that this is only a preference, not requirement. If a voice of the appropriate gender is not available, the synthesizer should substitute a voice with a different gender rather than failing the request.
 */
export declare enum GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnum {
    SsmlVoiceGenderUnspecified = "SSML_VOICE_GENDER_UNSPECIFIED",
    SsmlVoiceGenderMale = "SSML_VOICE_GENDER_MALE",
    SsmlVoiceGenderFemale = "SSML_VOICE_GENDER_FEMALE",
    SsmlVoiceGenderNeutral = "SSML_VOICE_GENDER_NEUTRAL"
}
/**
 * Description of which voice to use for speech synthesis.
 */
export declare class GoogleCloudDialogflowV2VoiceSelectionParams extends SpeakeasyBase {
    /**
     * Optional. The name of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and ssml_gender.
     */
    name?: string;
    /**
     * Optional. The preferred gender of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and name. Note that this is only a preference, not requirement. If a voice of the appropriate gender is not available, the synthesizer should substitute a voice with a different gender rather than failing the request.
     */
    ssmlGender?: GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnum;
}
