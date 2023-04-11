import { SpeakeasyBase } from "../../../internal/utils";
import { Browser } from "./browser";
/**
 * Browser List Response
 */
export declare class BrowsersListResponse extends SpeakeasyBase {
    /**
     * Browser collection.
     */
    browsers?: Browser[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#browsersListResponse".
     */
    kind?: string;
}
