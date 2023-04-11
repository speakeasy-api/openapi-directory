import { SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";
/**
 * ListAssets response.
 */
export declare class ListAssetsResponse extends SpeakeasyBase {
    /**
     * Assets.
     */
    assets?: Asset[];
    /**
     * Token to retrieve the next page of results. It expires 72 hours after the page token for the first page is generated. Set to empty if there are no remaining results.
     */
    nextPageToken?: string;
    /**
     * Time the snapshot was taken.
     */
    readTime?: string;
}
