import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdAssetsRequest extends SpeakeasyBase {
    /**
     * Number of results to return per page
     */
    length?: number;
    /**
     * Which field to use when ordering the results, prefix with `-` to invert ordering.
     *
     * @remarks
     *
     */
    ordering?: string;
    /**
     * Page number within the paginated result set
     */
    page?: number;
    /**
     * Search term
     */
    search?: string;
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class GetTargetsTargetIdAssets404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargetsTargetIdAssets401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Asset list
 */
export declare class GetTargetsTargetIdAssets200ApplicationJSON extends SpeakeasyBase {
    /**
     * Number of objects in the response.
     */
    count?: number;
    /**
     * Number of objects per page.
     */
    length?: number;
    /**
     * Current page.
     */
    page?: number;
    /**
     * Number of pages.
     */
    pageTotal?: number;
    /**
     * Asset objects.
     */
    results?: shared.Asset[];
}
export declare class GetTargetsTargetIdAssetsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Asset list
     */
    getTargetsTargetIdAssets200ApplicationJSONObject?: GetTargetsTargetIdAssets200ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    getTargetsTargetIdAssets401ApplicationJSONObject?: GetTargetsTargetIdAssets401ApplicationJSON;
    /**
     * Not found
     */
    getTargetsTargetIdAssets404ApplicationJSONObject?: GetTargetsTargetIdAssets404ApplicationJSON;
}
