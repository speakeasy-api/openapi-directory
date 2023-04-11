import { SpeakeasyBase } from "../../../internal/utils";
import { TextAtom } from "./textatom";
/**
 * Encoding of a text stream. For example, closed captions or subtitles.
 */
export declare class TextStream extends SpeakeasyBase {
    /**
     * The codec for this text stream. The default is `"webvtt"`. Supported text codecs: - 'srt' - 'ttml' - 'cea608' - 'cea708' - 'webvtt'
     */
    codec?: string;
    /**
     * Required. The BCP-47 language code, such as `"en-US"` or `"sr-Latn"`. For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string;
    /**
     * The mapping for the `Job.edit_list` atoms with text `EditAtom.inputs`.
     */
    mapping?: TextAtom[];
}
