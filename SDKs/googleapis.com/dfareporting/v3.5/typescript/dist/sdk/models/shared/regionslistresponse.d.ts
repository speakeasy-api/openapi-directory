import { SpeakeasyBase } from "../../../internal/utils";
import { Region } from "./region";
/**
 * Region List Response
 */
export declare class RegionsListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#regionsListResponse".
     */
    kind?: string;
    /**
     * Region collection.
     */
    regions?: Region[];
}
