import { SpeakeasyBase } from "../../../internal/utils";
import { AudioMapping } from "./audiomapping";
/**
 * Audio stream resource.
 */
export declare class AudioStream extends SpeakeasyBase {
    /**
     * Required. Audio bitrate in bits per second. Must be between 1 and 10,000,000.
     */
    bitrateBps?: number;
    /**
     * Number of audio channels. Must be between 1 and 6. The default is 2.
     */
    channelCount?: number;
    /**
     * A list of channel names specifying layout of the audio channels. This only affects the metadata embedded in the container headers, if supported by the specified format. The default is `["fl", "fr"]`. Supported channel names: - `fl` - Front left channel - `fr` - Front right channel - `sl` - Side left channel - `sr` - Side right channel - `fc` - Front center channel - `lfe` - Low frequency
     */
    channelLayout?: string[];
    /**
     * The codec for this audio stream. The default is `aac`. Supported audio codecs: - `aac` - `aac-he` - `aac-he-v2` - `mp3` - `ac3` - `eac3`
     */
    codec?: string;
    /**
     * The name for this particular audio stream that will be added to the HLS/DASH manifest. Not supported in MP4 files.
     */
    displayName?: string;
    /**
     * The BCP-47 language code, such as `en-US` or `sr-Latn`. For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier. Not supported in MP4 files.
     */
    languageCode?: string;
    /**
     * The mapping for the `Job.edit_list` atoms with audio `EditAtom.inputs`.
     */
    mapping?: AudioMapping[];
    /**
     * The audio sample rate in Hertz. The default is 48000 Hertz.
     */
    sampleRateHertz?: number;
}
