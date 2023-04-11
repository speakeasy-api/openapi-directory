import { SpeakeasyBase } from "../../../internal/utils";
import { GlossaryEntry } from "./glossaryentry";
/**
 * Response message for ListGlossaryEntries
 */
export declare class ListGlossaryEntriesResponse extends SpeakeasyBase {
    /**
     * Optional. The Glossary Entries
     */
    glossaryEntries?: GlossaryEntry[];
    /**
     * Optional. A token to retrieve a page of results. Pass this value in the [ListGLossaryEntriesRequest.page_token] field in the subsequent calls.
     */
    nextPageToken?: string;
}
