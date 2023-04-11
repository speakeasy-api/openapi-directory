import { SpeakeasyBase } from "../../../internal/utils";
import { TextMapping } from "./textmapping";
/**
 * Encoding of a text stream. For example, closed captions or subtitles.
 */
export declare class TextStream extends SpeakeasyBase {
    /**
     * The codec for this text stream. The default is `webvtt`. Supported text codecs: - `srt` - `ttml` - `cea608` - `cea708` - `webvtt`
     */
    codec?: string;
    /**
     * The name for this particular text stream that will be added to the HLS/DASH manifest. Not supported in MP4 files.
     */
    displayName?: string;
    /**
     * The BCP-47 language code, such as `en-US` or `sr-Latn`. For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier. Not supported in MP4 files.
     */
    languageCode?: string;
    /**
     * The mapping for the `Job.edit_list` atoms with text `EditAtom.inputs`.
     */
    mapping?: TextMapping[];
}
