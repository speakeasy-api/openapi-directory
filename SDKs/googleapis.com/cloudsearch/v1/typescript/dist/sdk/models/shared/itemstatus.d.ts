import { SpeakeasyBase } from "../../../internal/utils";
import { ProcessingError } from "./processingerror";
import { RepositoryError } from "./repositoryerror";
/**
 * Status code.
 */
export declare enum ItemStatusCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    Error = "ERROR",
    Modified = "MODIFIED",
    NewItem = "NEW_ITEM",
    Accepted = "ACCEPTED"
}
/**
 * This contains item's status and any errors.
 */
export declare class ItemStatus extends SpeakeasyBase {
    /**
     * Status code.
     */
    code?: ItemStatusCodeEnum;
    /**
     * Error details in case the item is in ERROR state.
     */
    processingErrors?: ProcessingError[];
    /**
     * Repository error reported by connector.
     */
    repositoryErrors?: RepositoryError[];
}
