import { SpeakeasyBase } from "../../../internal/utils";
import { LabelFieldModification } from "./labelfieldmodification";
/**
 * A modification to a label on a file. A LabelModification can be used to apply a label to a file, update an existing label on a file, or remove a label from a file.
 */
export declare class LabelModification extends SpeakeasyBase {
    /**
     * The list of modifications to this label's fields.
     */
    fieldModifications?: LabelFieldModification[];
    /**
     * This is always drive#labelModification.
     */
    kind?: string;
    /**
     * The ID of the label to modify.
     */
    labelId?: string;
    /**
     * If true, the label will be removed from the file.
     */
    removeLabel?: boolean;
}
