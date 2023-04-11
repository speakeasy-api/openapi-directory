import { SpeakeasyBase } from "../../../internal/utils";
import { Metro } from "./metro";
/**
 * Metro List Response
 */
export declare class MetrosListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#metrosListResponse".
     */
    kind?: string;
    /**
     * Metro collection.
     */
    metros?: Metro[];
}
