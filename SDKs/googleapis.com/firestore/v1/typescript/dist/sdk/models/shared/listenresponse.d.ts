import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentChange } from "./documentchange";
import { DocumentDelete } from "./documentdelete";
import { DocumentRemove } from "./documentremove";
import { ExistenceFilter } from "./existencefilter";
import { TargetChange } from "./targetchange";
/**
 * The response for Firestore.Listen.
 */
export declare class ListenResponse extends SpeakeasyBase {
    /**
     * A Document has changed. May be the result of multiple writes, including deletes, that ultimately resulted in a new value for the Document. Multiple DocumentChange messages may be returned for the same logical change, if multiple targets are affected.
     */
    documentChange?: DocumentChange;
    /**
     * A Document has been deleted. May be the result of multiple writes, including updates, the last of which deleted the Document. Multiple DocumentDelete messages may be returned for the same logical delete, if multiple targets are affected.
     */
    documentDelete?: DocumentDelete;
    /**
     * A Document has been removed from the view of the targets. Sent if the document is no longer relevant to a target and is out of view. Can be sent instead of a DocumentDelete or a DocumentChange if the server can not send the new value of the document. Multiple DocumentRemove messages may be returned for the same logical write or delete, if multiple targets are affected.
     */
    documentRemove?: DocumentRemove;
    /**
     * A digest of all the documents that match a given target.
     */
    filter?: ExistenceFilter;
    /**
     * Targets being watched have changed.
     */
    targetChange?: TargetChange;
}
