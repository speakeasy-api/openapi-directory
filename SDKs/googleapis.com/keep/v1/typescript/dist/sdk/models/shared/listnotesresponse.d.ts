import { SpeakeasyBase } from "../../../internal/utils";
import { Note } from "./note";
/**
 * The response when listing a page of notes.
 */
export declare class ListNotesResponse extends SpeakeasyBase {
    /**
     * Next page's `page_token` field.
     */
    nextPageToken?: string;
    /**
     * A page of notes.
     */
    notes?: Note[];
}
