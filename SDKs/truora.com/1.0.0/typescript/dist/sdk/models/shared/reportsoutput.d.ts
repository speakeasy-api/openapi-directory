import { SpeakeasyBase } from "../../../internal/utils";
import { Report } from "./report";
/**
 * Represents the result of report searches
 */
export declare class ReportsOutput extends SpeakeasyBase {
    /**
     * Next page path
     */
    next?: string;
    /**
     * Report list
     */
    reports: Report[];
    /**
     * Current page path
     */
    self: string;
}
