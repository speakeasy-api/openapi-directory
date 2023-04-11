import { SpeakeasyBase } from "../../../internal/utils";
import { DebugOptions } from "./debugoptions";
import { PushItem } from "./pushitem";
export declare class PushItemRequest extends SpeakeasyBase {
    /**
     * The name of connector making this call. Format: datasources/{source_id}/connectors/{ID}
     */
    connectorName?: string;
    /**
     * Shared request debug options for all cloudsearch RPC methods.
     */
    debugOptions?: DebugOptions;
    /**
     * Represents an item to be pushed to the indexing queue.
     */
    item?: PushItem;
}
