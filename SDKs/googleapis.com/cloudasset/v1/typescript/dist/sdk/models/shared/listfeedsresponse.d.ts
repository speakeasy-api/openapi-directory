import { SpeakeasyBase } from "../../../internal/utils";
import { Feed } from "./feed";
/**
 * Successful response
 */
export declare class ListFeedsResponse extends SpeakeasyBase {
    /**
     * A list of feeds.
     */
    feeds?: Feed[];
}
