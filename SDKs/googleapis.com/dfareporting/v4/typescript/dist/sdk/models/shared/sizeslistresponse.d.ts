import { SpeakeasyBase } from "../../../internal/utils";
import { Size } from "./size";
/**
 * Size List Response
 */
export declare class SizesListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#sizesListResponse".
     */
    kind?: string;
    /**
     * Size collection.
     */
    sizes?: Size[];
}
