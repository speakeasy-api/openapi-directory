import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request to delete a batch of existing contacts.
 */
export declare class BatchDeleteContactsRequest extends SpeakeasyBase {
    /**
     * Required. The resource names of the contact to delete. It's repeatable. Allows up to 500 resource names in a single request.
     */
    resourceNames?: string[];
}
