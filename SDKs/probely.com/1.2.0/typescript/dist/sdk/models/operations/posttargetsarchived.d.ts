import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Not allowed to perform operation
 */
export declare class PostTargetsArchived403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PostTargetsArchived401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PostTargetsArchived400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
/**
 * List of targets
 */
export declare class PostTargetsArchived200ApplicationJSON extends SpeakeasyBase {
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
     * Number of objects in the response.
     */
    paginationCount?: number;
    /**
     * Target objects
     */
    results?: shared.Target[];
}
export declare class PostTargetsArchivedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * List of targets
     */
    postTargetsArchived200ApplicationJSONObject?: PostTargetsArchived200ApplicationJSON;
    /**
     * Bad Request
     */
    postTargetsArchived400ApplicationJSONObject?: PostTargetsArchived400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    postTargetsArchived401ApplicationJSONObject?: PostTargetsArchived401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    postTargetsArchived403ApplicationJSONObject?: PostTargetsArchived403ApplicationJSON;
}
