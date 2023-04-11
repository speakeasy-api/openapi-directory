import { SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
/**
 * A Document has changed. May be the result of multiple writes, including deletes, that ultimately resulted in a new value for the Document. Multiple DocumentChange messages may be returned for the same logical change, if multiple targets are affected.
 */
export declare class DocumentChange extends SpeakeasyBase {
    /**
     * A Firestore document. Must not exceed 1 MiB - 4 bytes.
     */
    document?: Document;
    /**
     * A set of target IDs for targets that no longer match this document.
     */
    removedTargetIds?: number[];
    /**
     * A set of target IDs of targets that match this document.
     */
    targetIds?: number[];
}
