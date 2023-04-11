import { SpeakeasyBase } from "../../../internal/utils";
import { Bundle } from "./bundle";
/**
 * Successful response
 */
export declare class BundlesListResponse extends SpeakeasyBase {
    bundles?: Bundle[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "androidpublisher#bundlesListResponse".
     */
    kind?: string;
}
