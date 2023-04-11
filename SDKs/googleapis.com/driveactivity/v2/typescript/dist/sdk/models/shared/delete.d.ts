import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of delete action taken.
 */
export declare enum DeleteTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Trash = "TRASH",
    PermanentDelete = "PERMANENT_DELETE"
}
/**
 * An object was deleted.
 */
export declare class Delete extends SpeakeasyBase {
    /**
     * The type of delete action taken.
     */
    type?: DeleteTypeEnum;
}
