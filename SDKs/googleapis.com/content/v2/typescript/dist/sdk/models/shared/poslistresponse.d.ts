import { SpeakeasyBase } from "../../../internal/utils";
import { PosStore } from "./posstore";
/**
 * Successful response
 */
export declare class PosListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "content#posListResponse".
     */
    kind?: string;
    resources?: PosStore[];
}
