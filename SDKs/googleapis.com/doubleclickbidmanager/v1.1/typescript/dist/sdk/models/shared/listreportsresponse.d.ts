import { SpeakeasyBase } from "../../../internal/utils";
import { Report } from "./report";
/**
 * List reports response.
 */
export declare class ListReportsResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#listReportsResponse".
     */
    kind?: string;
    /**
     * Next page's pagination token if one exists.
     */
    nextPageToken?: string;
    /**
     * Retrieved reports.
     */
    reports?: Report[];
}
