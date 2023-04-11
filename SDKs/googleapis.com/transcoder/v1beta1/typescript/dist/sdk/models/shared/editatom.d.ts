import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Edit atom.
 */
export declare class EditAtom extends SpeakeasyBase {
    /**
     * End time in seconds for the atom, relative to the input file timeline. When `end_time_offset` is not specified, the `inputs` are used until the end of the atom.
     */
    endTimeOffset?: string;
    /**
     * List of `Input.key`s identifying files that should be used in this atom. The listed `inputs` must have the same timeline.
     */
    inputs?: string[];
    /**
     * A unique key for this atom. Must be specified when using advanced mapping.
     */
    key?: string;
    /**
     * Start time in seconds for the atom, relative to the input file timeline. The default is `0s`.
     */
    startTimeOffset?: string;
}
