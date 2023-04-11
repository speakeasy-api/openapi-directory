import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdFindingsRequest extends SpeakeasyBase {
    /**
     * Filter by assignee ids
     */
    assignee?: string[];
    /**
     * Filter by finding labels
     */
    label?: string[];
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
     * Filter by scan ids
     */
    scan?: string[];
    /**
     * Search term
     */
    search?: string;
    /**
     * Filter by finding severity
     */
    severity?: shared.FindingSeverityEnum;
    /**
     * Filter by finding states
     */
    state?: shared.FindingStateEnum;
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class GetTargetsTargetIdFindings404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargetsTargetIdFindings401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Finding list
 */
export declare class GetTargetsTargetIdFindings200ApplicationJSON extends SpeakeasyBase {
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
     * Finding objects.
     */
    results?: shared.Finding[];
}
export declare class GetTargetsTargetIdFindingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Finding list
     */
    getTargetsTargetIdFindings200ApplicationJSONObject?: GetTargetsTargetIdFindings200ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    getTargetsTargetIdFindings401ApplicationJSONObject?: GetTargetsTargetIdFindings401ApplicationJSON;
    /**
     * Not found
     */
    getTargetsTargetIdFindings404ApplicationJSONObject?: GetTargetsTargetIdFindings404ApplicationJSON;
}
