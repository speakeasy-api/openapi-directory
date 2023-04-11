import { SpeakeasyBase } from "../../../internal/utils";
import { TagInputResourceIdentifier } from "./taginputresourceidentifier";
/**
 * Request to add or remove tags associated with a transaction.
 *
 * @remarks
 *
 */
export declare class UpdateTransactionTagsRequest extends SpeakeasyBase {
    /**
     * The tags to add to or remove from the transaction.
     *
     * @remarks
     *
     */
    data: TagInputResourceIdentifier[];
}
