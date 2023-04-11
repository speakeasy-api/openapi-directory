import { SpeakeasyBase } from "../../../internal/utils";
import { TenancyUnit } from "./tenancyunit";
/**
 * Response for the search query.
 */
export declare class SearchTenancyUnitsResponse extends SpeakeasyBase {
    /**
     * Pagination token for large results.
     */
    nextPageToken?: string;
    /**
     * Tenancy Units matching the request.
     */
    tenancyUnits?: TenancyUnit[];
}
