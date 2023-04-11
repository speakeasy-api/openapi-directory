import { SpeakeasyBase } from "../../../internal/utils";
import { Region } from "./region";
/**
 * Response message for the `ListRegions` method.
 */
export declare class ListRegionsResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The regions from the specified merchant.
     */
    regions?: Region[];
}
