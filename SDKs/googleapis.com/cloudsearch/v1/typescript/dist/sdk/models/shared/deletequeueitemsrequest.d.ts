import { SpeakeasyBase } from "../../../internal/utils";
import { DebugOptions } from "./debugoptions";
export declare class DeleteQueueItemsRequest extends SpeakeasyBase {
    /**
     * The name of connector making this call. Format: datasources/{source_id}/connectors/{ID}
     */
    connectorName?: string;
    /**
     * Shared request debug options for all cloudsearch RPC methods.
     */
    debugOptions?: DebugOptions;
    /**
     * The name of a queue to delete items from.
     */
    queue?: string;
}
