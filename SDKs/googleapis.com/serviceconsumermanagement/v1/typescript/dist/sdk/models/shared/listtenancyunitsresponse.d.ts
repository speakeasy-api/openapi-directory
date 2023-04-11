import { SpeakeasyBase } from "../../../internal/utils";
import { TenancyUnit } from "./tenancyunit";
/**
 * Response for the list request.
 */
export declare class ListTenancyUnitsResponse extends SpeakeasyBase {
    /**
     * Pagination token for large results.
     */
    nextPageToken?: string;
    /**
     * Tenancy units matching the request.
     */
    tenancyUnits?: TenancyUnit[];
}
