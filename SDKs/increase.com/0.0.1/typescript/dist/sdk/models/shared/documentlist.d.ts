import { SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
/**
 * A list of Document objects
 */
export declare class DocumentList extends SpeakeasyBase {
    /**
     * The contents of the list.
     */
    data: Document[];
    /**
     * A pointer to a place in the list.
     */
    nextCursor: string;
}
