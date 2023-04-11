import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListSystemAdvisoriesSecurity extends SpeakeasyBase {
    rhIdentity: string;
}
/**
 * Sort field
 */
export declare enum ListSystemAdvisoriesSortEnum {
    Id = "id",
    Name = "name",
    Type = "type",
    Synopsis = "synopsis",
    PublicDate = "public_date"
}
export declare class ListSystemAdvisoriesRequest extends SpeakeasyBase {
    /**
     * Filter
     */
    filterAdvisoryType?: string;
    /**
     * Filter
     */
    filterDescription?: string;
    /**
     * Filter
     */
    filterId?: string;
    /**
     * Filter
     */
    filterPublicDate?: string;
    /**
     * Filter
     */
    filterSeverity?: string;
    /**
     * Filter
     */
    filterSynopsis?: string;
    /**
     * Inventory ID
     */
    inventoryId: string;
    /**
     * Limit for paging, set -1 to return all
     */
    limit?: number;
    /**
     * Offset for paging
     */
    offset?: number;
    /**
     * Find matching text
     */
    search?: string;
    /**
     * Sort field
     */
    sort?: ListSystemAdvisoriesSortEnum;
}
export declare class ListSystemAdvisoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    controllersSystemAdvisoriesResponse?: shared.ControllersSystemAdvisoriesResponse;
}
