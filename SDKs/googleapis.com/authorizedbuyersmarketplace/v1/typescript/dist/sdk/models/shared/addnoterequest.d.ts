import { SpeakeasyBase } from "../../../internal/utils";
import { NoteInput } from "./note";
/**
 * Request to add a note.
 */
export declare class AddNoteRequestInput extends SpeakeasyBase {
    /**
     * A text note attached to the proposal to facilitate the communication between buyers and sellers.
     */
    note?: NoteInput;
}
