import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Identifies which input file, track, and channel should be used.
 */
export declare class AudioChannelInput extends SpeakeasyBase {
    /**
     * Required. The zero-based index of the channel in the input file.
     */
    channel?: number;
    /**
     * Audio volume control in dB. Negative values decrease volume, positive values increase. The default is 0.
     */
    gainDb?: number;
    /**
     * Required. The `Input.key` that identifies the input file.
     */
    key?: string;
    /**
     * Required. The zero-based index of the track in the input file.
     */
    track?: number;
}
