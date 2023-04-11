import { SpeakeasyBase } from "../../../internal/utils";
import { RouterStatus } from "./routerstatus";
/**
 * Successful response
 */
export declare class RouterStatusResponse extends SpeakeasyBase {
    /**
     * Type of resource.
     */
    kind?: string;
    result?: RouterStatus;
}
