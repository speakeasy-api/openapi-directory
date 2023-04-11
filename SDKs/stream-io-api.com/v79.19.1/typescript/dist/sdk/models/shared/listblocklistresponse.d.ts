import { SpeakeasyBase } from "../../../internal/utils";
import { BlockList } from "./blocklist";
/**
 * Successful response
 */
export declare class ListBlockListResponse extends SpeakeasyBase {
    blocklists: BlockList[];
    /**
     * Duration of the request in human-readable format
     */
    duration: string;
}
