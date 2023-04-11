import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The mapping for the `Job.edit_list` atoms with text `EditAtom.inputs`.
 */
export declare class TextMapping extends SpeakeasyBase {
    /**
     * Required. The `EditAtom.key` that references atom with text inputs in the `Job.edit_list`.
     */
    atomKey?: string;
    /**
     * Required. The `Input.key` that identifies the input file.
     */
    inputKey?: string;
    /**
     * Required. The zero-based index of the track in the input file.
     */
    inputTrack?: number;
}
