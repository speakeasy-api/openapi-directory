import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdFindingsIdRequest extends SpeakeasyBase {
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
export declare class GetTargetsTargetIdFindingsId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargetsTargetIdFindingsId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdFindingsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Finding object
     */
    finding?: shared.Finding;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    getTargetsTargetIdFindingsId401ApplicationJSONObject?: GetTargetsTargetIdFindingsId401ApplicationJSON;
    /**
     * Not found
     */
    getTargetsTargetIdFindingsId404ApplicationJSONObject?: GetTargetsTargetIdFindingsId404ApplicationJSON;
}
