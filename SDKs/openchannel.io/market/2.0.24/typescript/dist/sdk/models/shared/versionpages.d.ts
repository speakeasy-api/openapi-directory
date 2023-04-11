import { SpeakeasyBase } from "../../../internal/utils";
import { AppVersion } from "./appversion";
/**
 * Pages of AppVersion results
 */
export declare class VersionPages extends SpeakeasyBase {
    /**
     * The total number of results
     */
    count: number;
    /**
     * An array of apps for the current page
     */
    list: AppVersion[];
    /**
     * The current page number for this result set
     */
    pageNumber?: number;
    /**
     * The total number of pages available for this result set
     */
    pages?: number;
}
