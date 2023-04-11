import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageEnum } from "./languageenum";
import { VoiceNameEnum } from "./voicenameenum";
/**
 * Action to perform
 */
export declare class StartTalkRequest extends SpeakeasyBase {
    /**
     * The language to use
     */
    language?: LanguageEnum;
    /**
     * The volume level that the speech is played. This can be any value between `-1` to `1` in `0.1` increments, with `0` being the default.
     */
    level?: string;
    /**
     * The number of times to repeat the text the file, 0 for infinite
     */
    loop?: number;
    /**
     * Set to true to use the premium version of the specified style if available, otherwise the standard version will be used. The default value is false. You can find more information about Premium Voices in the [Text-To-Speech guide](/voice/voice-api/guides/text-to-speech#premium-voices).
     */
    premium?: boolean;
    /**
     * The vocal style (vocal range, tessitura, and timbre) to use
     */
    style?: number;
    /**
     * The text to read
     */
    text: string;
    /**
     * <strong>DEPRECATED</strong> The voice & language to use
     */
    voiceName?: VoiceNameEnum;
}
