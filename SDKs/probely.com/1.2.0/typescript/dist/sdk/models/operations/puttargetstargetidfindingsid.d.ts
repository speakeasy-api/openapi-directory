import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutTargetsTargetIdFindingsIdRequest extends SpeakeasyBase {
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
export declare class PutTargetsTargetIdFindingsId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PutTargetsTargetIdFindingsId403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PutTargetsTargetIdFindingsId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PutTargetsTargetIdFindingsId400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PutTargetsTargetIdFindingsIdResponse extends SpeakeasyBase {
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
    putTargetsTargetIdFindingsId400ApplicationJSONObject?: PutTargetsTargetIdFindingsId400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    putTargetsTargetIdFindingsId401ApplicationJSONObject?: PutTargetsTargetIdFindingsId401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    putTargetsTargetIdFindingsId403ApplicationJSONObject?: PutTargetsTargetIdFindingsId403ApplicationJSON;
    /**
     * Not found
     */
    putTargetsTargetIdFindingsId404ApplicationJSONObject?: PutTargetsTargetIdFindingsId404ApplicationJSON;
}
