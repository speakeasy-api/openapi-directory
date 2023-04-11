import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The mapping for the `Job.edit_list` atoms with audio `EditAtom.inputs`.
 */
export declare class AudioMapping extends SpeakeasyBase {
    /**
     * Required. The `EditAtom.key` that references the atom with audio inputs in the `Job.edit_list`.
     */
    atomKey?: string;
    /**
     * Audio volume control in dB. Negative values decrease volume, positive values increase. The default is 0.
     */
    gainDb?: number;
    /**
     * Required. The zero-based index of the channel in the input audio stream.
     */
    inputChannel?: number;
    /**
     * Required. The `Input.key` that identifies the input file.
     */
    inputKey?: string;
    /**
     * Required. The zero-based index of the track in the input file.
     */
    inputTrack?: number;
    /**
     * Required. The zero-based index of the channel in the output audio stream.
     */
    outputChannel?: number;
}
