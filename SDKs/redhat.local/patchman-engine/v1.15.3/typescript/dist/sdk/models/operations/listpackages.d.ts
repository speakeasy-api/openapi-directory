import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListPackagesSecurity extends SpeakeasyBase {
    rhIdentity: string;
}
/**
 * Sort field
 */
export declare enum ListPackagesSortEnum {
    Id = "id",
    Name = "name",
    SystemsInstalled = "systems_installed",
    SystemsUpdatable = "systems_updatable"
}
export declare class ListPackagesRequest extends SpeakeasyBase {
    /**
     * Filter
     */
    filterName?: string;
    /**
     * Filter
     */
    filterSummary?: string;
    /**
     * Filter systems by their SAP SIDs
     */
    filterSystemProfileSapSidsIn?: string[];
    /**
     * Filter only SAP systems
     */
    filterSystemProfileSapSystem?: string;
    /**
     * Filter
     */
    filterSystemsInstalled?: string;
    /**
     * Filter
     */
    filterSystemsUpdatable?: string;
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
    sort?: ListPackagesSortEnum;
    /**
     * Tag filter
     */
    tags?: string[];
}
export declare class ListPackagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    controllersPackagesResponse?: shared.ControllersPackagesResponse;
}
