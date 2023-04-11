import { SpeakeasyBase } from "../../../internal/utils";
import { Item } from "./item";
/**
 * Successful response
 */
export declare class PollItemsResponse extends SpeakeasyBase {
    /**
     * Set of items from the queue available for connector to process. These items have the following subset of fields populated: version metadata.hash structured_data.hash content.hash payload status queue
     */
    items?: Item[];
}
