import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Document has been deleted. May be the result of multiple writes, including updates, the last of which deleted the Document. Multiple DocumentDelete messages may be returned for the same logical delete, if multiple targets are affected.
 */
export declare class DocumentDelete extends SpeakeasyBase {
    /**
     * The resource name of the Document that was deleted.
     */
    document?: string;
    /**
     * The read timestamp at which the delete was observed. Greater or equal to the `commit_time` of the delete.
     */
    readTime?: string;
    /**
     * A set of target IDs for targets that previously matched this entity.
     */
    removedTargetIds?: number[];
}
