import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SystemPackagesSecurity extends SpeakeasyBase {
    rhIdentity: string;
}
export declare class SystemPackagesRequest extends SpeakeasyBase {
    /**
     * Filter
     */
    filterDescription?: string;
    /**
     * Filter
     */
    filterEvra?: string;
    /**
     * Filter
     */
    filterName?: string;
    /**
     * Filter
     */
    filterSummary?: string;
    /**
     * Filter
     */
    filterUpdatable?: boolean;
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
}
export declare class SystemPackagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    controllersSystemPackageResponse?: shared.ControllersSystemPackageResponse;
}
