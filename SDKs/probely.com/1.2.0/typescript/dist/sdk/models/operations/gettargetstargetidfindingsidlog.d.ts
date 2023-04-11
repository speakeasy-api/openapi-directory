import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdFindingsIdLogRequest extends SpeakeasyBase {
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
export declare class GetTargetsTargetIdFindingsIdLog404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargetsTargetIdFindingsIdLog401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdFindingsIdLogResponse extends SpeakeasyBase {
    /**
     * Finding activity log
     */
    activities?: shared.Activity[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    getTargetsTargetIdFindingsIdLog401ApplicationJSONObject?: GetTargetsTargetIdFindingsIdLog401ApplicationJSON;
    /**
     * Not found
     */
    getTargetsTargetIdFindingsIdLog404ApplicationJSONObject?: GetTargetsTargetIdFindingsIdLog404ApplicationJSON;
}
