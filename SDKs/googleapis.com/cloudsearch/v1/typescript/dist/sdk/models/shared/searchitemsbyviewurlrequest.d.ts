import { SpeakeasyBase } from "../../../internal/utils";
import { DebugOptions } from "./debugoptions";
export declare class SearchItemsByViewUrlRequest extends SpeakeasyBase {
    /**
     * Shared request debug options for all cloudsearch RPC methods.
     */
    debugOptions?: DebugOptions;
    /**
     * The next_page_token value returned from a previous request, if any.
     */
    pageToken?: string;
    /**
     * Specify the full view URL to find the corresponding item. The maximum length is 2048 characters.
     */
    viewUrl?: string;
}
