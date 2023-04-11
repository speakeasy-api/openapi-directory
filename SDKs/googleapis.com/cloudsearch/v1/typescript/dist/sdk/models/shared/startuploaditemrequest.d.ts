import { SpeakeasyBase } from "../../../internal/utils";
import { DebugOptions } from "./debugoptions";
/**
 * Start upload file request.
 */
export declare class StartUploadItemRequest extends SpeakeasyBase {
    /**
     * The name of connector making this call. Format: datasources/{source_id}/connectors/{ID}
     */
    connectorName?: string;
    /**
     * Shared request debug options for all cloudsearch RPC methods.
     */
    debugOptions?: DebugOptions;
}
