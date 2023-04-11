import { SpeakeasyBase } from "../../../internal/utils";
import { PersonResponse } from "./personresponse";
/**
 * If not successful, returns BatchUpdateContactsErrorDetails, a list of errors corresponding to each contact. The response to a request to update a batch of contacts.
 */
export declare class BatchUpdateContactsResponse extends SpeakeasyBase {
    /**
     * A map of resource names to the contacts that were updated, unless the request `read_mask` is empty.
     */
    updateResult?: Record<string, PersonResponse>;
}
