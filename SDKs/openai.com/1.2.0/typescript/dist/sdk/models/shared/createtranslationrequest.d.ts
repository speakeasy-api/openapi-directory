import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateTranslationRequestFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class CreateTranslationRequest extends SpeakeasyBase {
    /**
     * The audio file to translate, in one of these formats: mp3, mp4, mpeg, mpga, m4a, wav, or webm.
     *
     * @remarks
     *
     */
    file: CreateTranslationRequestFile;
    /**
     * ID of the model to use. Only `whisper-1` is currently available.
     *
     * @remarks
     *
     */
    model: string;
    /**
     * An optional text to guide the model's style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text/prompting) should be in English.
     *
     * @remarks
     *
     */
    prompt?: string;
    /**
     * The format of the transcript output, in one of these options: json, text, srt, verbose_json, or vtt.
     *
     * @remarks
     *
     */
    responseFormat?: string;
    /**
     * The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.
     *
     * @remarks
     *
     */
    temperature?: number;
}
