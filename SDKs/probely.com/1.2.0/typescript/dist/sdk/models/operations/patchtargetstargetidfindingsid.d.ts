import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchTargetsTargetIdFindingsIdRequest extends SpeakeasyBase {
    findingUpdateInput: shared.FindingUpdateInput;
    /**
     * Object Id
     */
    id: string;
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class PatchTargetsTargetIdFindingsId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PatchTargetsTargetIdFindingsId403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PatchTargetsTargetIdFindingsId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PatchTargetsTargetIdFindingsId400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PatchTargetsTargetIdFindingsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Finding object
     */
    finding?: shared.Finding;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    patchTargetsTargetIdFindingsId400ApplicationJSONObject?: PatchTargetsTargetIdFindingsId400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    patchTargetsTargetIdFindingsId401ApplicationJSONObject?: PatchTargetsTargetIdFindingsId401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    patchTargetsTargetIdFindingsId403ApplicationJSONObject?: PatchTargetsTargetIdFindingsId403ApplicationJSON;
    /**
     * Not found
     */
    patchTargetsTargetIdFindingsId404ApplicationJSONObject?: PatchTargetsTargetIdFindingsId404ApplicationJSON;
}
