import { SpeakeasyBase } from "../../../internal/utils";
import { DebugOptions } from "./debugoptions";
export declare enum PollItemsRequestStatusCodesEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    Error = "ERROR",
    Modified = "MODIFIED",
    NewItem = "NEW_ITEM",
    Accepted = "ACCEPTED"
}
export declare class PollItemsRequest extends SpeakeasyBase {
    /**
     * The name of connector making this call. Format: datasources/{source_id}/connectors/{ID}
     */
    connectorName?: string;
    /**
     * Shared request debug options for all cloudsearch RPC methods.
     */
    debugOptions?: DebugOptions;
    /**
     * Maximum number of items to return. The maximum value is 100 and the default value is 20.
     */
    limit?: number;
    /**
     * Queue name to fetch items from. If unspecified, PollItems will fetch from 'default' queue. The maximum length is 100 characters.
     */
    queue?: string;
    /**
     * Limit the items polled to the ones with these statuses.
     */
    statusCodes?: PollItemsRequestStatusCodesEnum[];
}
