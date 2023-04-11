import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { LicenseEditorialContentResult } from "./licenseeditorialcontentresult";
/**
 * List of editorial license results
 */
export declare class LicenseEditorialContentResults extends SpeakeasyBase {
    /**
     * License results
     */
    data?: LicenseEditorialContentResult[];
    /**
     * Error list; appears only if there was an error
     */
    errors?: ErrorT[];
    /**
     * Optional error message
     */
    message?: string;
    /**
     * Current page of the response
     */
    page?: number;
    /**
     * Number of results per page
     */
    perPage?: number;
    /**
     * Total count of all results
     */
    totalCount?: number;
}
