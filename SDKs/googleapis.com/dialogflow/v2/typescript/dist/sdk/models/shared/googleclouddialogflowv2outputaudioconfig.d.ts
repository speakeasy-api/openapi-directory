import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2SynthesizeSpeechConfig } from "./googleclouddialogflowv2synthesizespeechconfig";
/**
 * Required. Audio encoding of the synthesized audio content.
 */
export declare enum GoogleCloudDialogflowV2OutputAudioConfigAudioEncodingEnum {
    OutputAudioEncodingUnspecified = "OUTPUT_AUDIO_ENCODING_UNSPECIFIED",
    OutputAudioEncodingLinear16 = "OUTPUT_AUDIO_ENCODING_LINEAR_16",
    OutputAudioEncodingMp3 = "OUTPUT_AUDIO_ENCODING_MP3",
    OutputAudioEncodingMp364Kbps = "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS",
    OutputAudioEncodingOggOpus = "OUTPUT_AUDIO_ENCODING_OGG_OPUS",
    OutputAudioEncodingMulaw = "OUTPUT_AUDIO_ENCODING_MULAW"
}
/**
 * Instructs the speech synthesizer on how to generate the output audio content. If this audio config is supplied in a request, it overrides all existing text-to-speech settings applied to the agent.
 */
export declare class GoogleCloudDialogflowV2OutputAudioConfig extends SpeakeasyBase {
    /**
     * Required. Audio encoding of the synthesized audio content.
     */
    audioEncoding?: GoogleCloudDialogflowV2OutputAudioConfigAudioEncodingEnum;
    /**
     * The synthesis sample rate (in hertz) for this audio. If not provided, then the synthesizer will use the default sample rate based on the audio encoding. If this is different from the voice's natural sample rate, then the synthesizer will honor this request by converting to the desired sample rate (which might result in worse audio quality).
     */
    sampleRateHertz?: number;
    /**
     * Configuration of how speech should be synthesized.
     */
    synthesizeSpeechConfig?: GoogleCloudDialogflowV2SynthesizeSpeechConfig;
}
