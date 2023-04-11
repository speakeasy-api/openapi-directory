import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostTargetsTargetIdFindingsBulkRetestRequest extends SpeakeasyBase {
    findingBulkRetest: shared.FindingBulkRetest;
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class PostTargetsTargetIdFindingsBulkRetest404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PostTargetsTargetIdFindingsBulkRetest401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PostTargetsTargetIdFindingsBulkRetest400ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message
     */
    error?: string;
}
export declare class PostTargetsTargetIdFindingsBulkRetestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    postTargetsTargetIdFindingsBulkRetest400ApplicationJSONObject?: PostTargetsTargetIdFindingsBulkRetest400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    postTargetsTargetIdFindingsBulkRetest401ApplicationJSONObject?: PostTargetsTargetIdFindingsBulkRetest401ApplicationJSON;
    /**
     * Not found
     */
    postTargetsTargetIdFindingsBulkRetest404ApplicationJSONObject?: PostTargetsTargetIdFindingsBulkRetest404ApplicationJSON;
}
