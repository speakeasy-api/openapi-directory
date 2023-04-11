import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListAdvisoriesSecurity extends SpeakeasyBase {
    rhIdentity: string;
}
/**
 * Sort field
 */
export declare enum ListAdvisoriesSortEnum {
    Id = "id",
    Name = "name",
    AdvisoryType = "advisory_type",
    Synopsis = "synopsis",
    PublicDate = "public_date",
    ApplicableSystems = "applicable_systems"
}
export declare class ListAdvisoriesRequest extends SpeakeasyBase {
    /**
     * Filter
     */
    filterAdvisoryType?: string;
    /**
     * Filter
     */
    filterApplicableSystems?: string;
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
     * Filter systems by their SAP SIDs
     */
    filterSystemProfileSapSidsIn?: string[];
    /**
     * Filter only SAP systems
     */
    filterSystemProfileSapSystem?: string;
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
    sort?: ListAdvisoriesSortEnum;
    /**
     * Tag filter
     */
    tags?: string[];
}
export declare class ListAdvisoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    controllersAdvisoriesResponse?: shared.ControllersAdvisoriesResponse;
}
