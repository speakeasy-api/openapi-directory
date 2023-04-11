import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListSystemsSecurity extends SpeakeasyBase {
    rhIdentity: string;
}
/**
 * Sort field
 */
export declare enum ListSystemsSortEnum {
    Id = "id",
    DisplayName = "display_name",
    LastEvaluation = "last_evaluation",
    LastUpload = "last_upload",
    RhsaCount = "rhsa_count",
    RhbaCount = "rhba_count",
    RheaCount = "rhea_count",
    OtherCount = "other_count",
    Stale = "stale",
    PackagesInstalled = "packages_installed",
    PackagesUpdatable = "packages_updatable"
}
export declare class ListSystemsRequest extends SpeakeasyBase {
    /**
     * Filter
     */
    filterCreated?: string;
    /**
     * Filter
     */
    filterCulledTimestamp?: string;
    /**
     * Filter
     */
    filterDisplayName?: string;
    /**
     * Filter
     */
    filterId?: string;
    /**
     * Filter
     */
    filterInsightsId?: string;
    /**
     * Filter
     */
    filterLastEvaluation?: string;
    /**
     * Filter
     */
    filterLastUpload?: string;
    /**
     * Filter
     */
    filterOtherCount?: string;
    /**
     * Filter
     */
    filterPackagesInstalled?: string;
    /**
     * Filter
     */
    filterPackagesUpdatable?: string;
    /**
     * Filter
     */
    filterRhbaCount?: string;
    /**
     * Filter
     */
    filterRheaCount?: string;
    /**
     * Filter
     */
    filterRhsaCount?: string;
    /**
     * Filter
     */
    filterStale?: string;
    /**
     * Filter
     */
    filterStaleTimestamp?: string;
    /**
     * Filter
     */
    filterStaleWarningTimestamp?: string;
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
    sort?: ListSystemsSortEnum;
    /**
     * Tag filter
     */
    tags?: string[];
}
export declare class ListSystemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    controllersSystemsResponse?: shared.ControllersSystemsResponse;
}
