import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLabelsRequest extends SpeakeasyBase {
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
}
/**
 * Access token is missing or invalid
 */
export declare class GetLabels401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Label list
 */
export declare class GetLabels200ApplicationJSON extends SpeakeasyBase {
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
     * label objects.
     */
    results?: shared.Label[];
}
export declare class GetLabelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Label list
     */
    getLabels200ApplicationJSONObject?: GetLabels200ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    getLabels401ApplicationJSONObject?: GetLabels401ApplicationJSON;
}
