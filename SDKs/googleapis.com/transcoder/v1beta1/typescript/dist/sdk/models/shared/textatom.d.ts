import { SpeakeasyBase } from "../../../internal/utils";
import { TextInput } from "./textinput";
/**
 * The mapping for the `Job.edit_list` atoms with text `EditAtom.inputs`.
 */
export declare class TextAtom extends SpeakeasyBase {
    /**
     * List of `Job.inputs` that should be embedded in this atom. Only one input is supported.
     */
    inputs?: TextInput[];
    /**
     * Required. The `EditAtom.key` that references atom with text inputs in the `Job.edit_list`.
     */
    key?: string;
}
