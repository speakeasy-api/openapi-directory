import { SpeakeasyBase } from "../../../internal/utils";
import { Change } from "./change";
/**
 * GetContiuousCheckHistoryOutput
 */
export declare class GetContiuousCheckHistoryOutput extends SpeakeasyBase {
    /**
     * List of background check changelogs
     */
    history: Change[];
    /**
     * Next page URL
     */
    next?: string;
    /**
     * Current page URL
     */
    self?: string;
}
