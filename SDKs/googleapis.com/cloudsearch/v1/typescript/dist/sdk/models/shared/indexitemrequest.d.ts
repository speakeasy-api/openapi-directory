import { SpeakeasyBase } from "../../../internal/utils";
import { DebugOptions } from "./debugoptions";
import { IndexItemOptions } from "./indexitemoptions";
import { Item } from "./item";
/**
 * Required. The RequestMode for this request.
 */
export declare enum IndexItemRequestModeEnum {
    Unspecified = "UNSPECIFIED",
    Synchronous = "SYNCHRONOUS",
    Asynchronous = "ASYNCHRONOUS"
}
export declare class IndexItemRequest extends SpeakeasyBase {
    /**
     * The name of connector making this call. Format: datasources/{source_id}/connectors/{ID}
     */
    connectorName?: string;
    /**
     * Shared request debug options for all cloudsearch RPC methods.
     */
    debugOptions?: DebugOptions;
    indexItemOptions?: IndexItemOptions;
    /**
     * Represents a single object that is an item in the search index, such as a file, folder, or a database record.
     */
    item?: Item;
    /**
     * Required. The RequestMode for this request.
     */
    mode?: IndexItemRequestModeEnum;
}
