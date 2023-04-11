import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Deletes a NamedRange.
 */
export declare class DeleteNamedRangeRequest extends SpeakeasyBase {
    /**
     * The name of the range(s) to delete. All named ranges with the given name will be deleted.
     */
    name?: string;
    /**
     * The ID of the named range to delete.
     */
    namedRangeId?: string;
}
