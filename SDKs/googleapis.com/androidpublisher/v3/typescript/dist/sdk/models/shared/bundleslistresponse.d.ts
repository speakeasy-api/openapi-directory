import { SpeakeasyBase } from "../../../internal/utils";
import { Bundle } from "./bundle";
/**
 * Response listing all app bundles.
 */
export declare class BundlesListResponse extends SpeakeasyBase {
    /**
     * All app bundles.
     */
    bundles?: Bundle[];
    /**
     * The kind of this response ("androidpublisher#bundlesListResponse").
     */
    kind?: string;
}
