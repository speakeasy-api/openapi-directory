import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchTargetsTargetIdFindingsBulkUpdateRequest extends SpeakeasyBase {
    findingBulkUpdateInput: shared.FindingBulkUpdateInput;
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class PatchTargetsTargetIdFindingsBulkUpdate404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PatchTargetsTargetIdFindingsBulkUpdate401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PatchTargetsTargetIdFindingsBulkUpdate400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PatchTargetsTargetIdFindingsBulkUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    patchTargetsTargetIdFindingsBulkUpdate400ApplicationJSONObject?: PatchTargetsTargetIdFindingsBulkUpdate400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    patchTargetsTargetIdFindingsBulkUpdate401ApplicationJSONObject?: PatchTargetsTargetIdFindingsBulkUpdate401ApplicationJSON;
    /**
     * Not found
     */
    patchTargetsTargetIdFindingsBulkUpdate404ApplicationJSONObject?: PatchTargetsTargetIdFindingsBulkUpdate404ApplicationJSON;
}
