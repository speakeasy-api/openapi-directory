import { SpeakeasyBase } from "../../../internal/utils";
import { Package } from "./package";
/**
 * The response from listing packages.
 */
export declare class ListPackagesResponse extends SpeakeasyBase {
    /**
     * The token to retrieve the next page of packages, or empty if there are no more packages to return.
     */
    nextPageToken?: string;
    /**
     * The packages returned.
     */
    packages?: Package[];
}
