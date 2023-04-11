import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostTargetsTargetIdFindingsBulkReportRequest extends SpeakeasyBase {
    findingBulkIds: shared.FindingBulkIds;
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class PostTargetsTargetIdFindingsBulkReport404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PostTargetsTargetIdFindingsBulkReport401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PostTargetsTargetIdFindingsBulkReport400ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message
     */
    error?: string;
}
export declare class PostTargetsTargetIdFindingsBulkReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    postTargetsTargetIdFindingsBulkReport400ApplicationJSONObject?: PostTargetsTargetIdFindingsBulkReport400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    postTargetsTargetIdFindingsBulkReport401ApplicationJSONObject?: PostTargetsTargetIdFindingsBulkReport401ApplicationJSON;
    /**
     * Not found
     */
    postTargetsTargetIdFindingsBulkReport404ApplicationJSONObject?: PostTargetsTargetIdFindingsBulkReport404ApplicationJSON;
}
