import { SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";
/**
 * Response message for listing assets.
 */
export declare class ListAssetsResponse extends SpeakeasyBase {
    /**
     * A list of assets.
     */
    assets?: Asset[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
