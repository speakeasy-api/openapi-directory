import { SpeakeasyBase } from "../../../internal/utils";
import { ApkListing } from "./apklisting";
/**
 * Successful response
 */
export declare class ApkListingsListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "androidpublisher#apkListingsListResponse".
     */
    kind?: string;
    listings?: ApkListing[];
}
