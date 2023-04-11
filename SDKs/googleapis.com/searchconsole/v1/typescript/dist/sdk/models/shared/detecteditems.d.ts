import { SpeakeasyBase } from "../../../internal/utils";
import { Item } from "./item";
/**
 * Rich Results items grouped by type.
 */
export declare class DetectedItems extends SpeakeasyBase {
    /**
     * List of Rich Results items.
     */
    items?: Item[];
    /**
     * Rich Results type
     */
    richResultType?: string;
}
