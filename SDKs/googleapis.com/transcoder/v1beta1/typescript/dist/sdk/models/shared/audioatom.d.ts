import { SpeakeasyBase } from "../../../internal/utils";
import { AudioChannel } from "./audiochannel";
/**
 * The mapping for the `Job.edit_list` atoms with audio `EditAtom.inputs`.
 */
export declare class AudioAtom extends SpeakeasyBase {
    /**
     * List of `Channel`s for this audio stream. for in-depth explanation.
     */
    channels?: AudioChannel[];
    /**
     * Required. The `EditAtom.key` that references the atom with audio inputs in the `Job.edit_list`.
     */
    key?: string;
}
