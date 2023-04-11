import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostTargetsTargetIdFindingsIdRetestRequest extends SpeakeasyBase {
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
export declare class PostTargetsTargetIdFindingsIdRetest404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PostTargetsTargetIdFindingsIdRetest403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PostTargetsTargetIdFindingsIdRetest401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdFindingsIdRetestResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Scan object
     */
    scan?: shared.Scan;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    postTargetsTargetIdFindingsIdRetest401ApplicationJSONObject?: PostTargetsTargetIdFindingsIdRetest401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    postTargetsTargetIdFindingsIdRetest403ApplicationJSONObject?: PostTargetsTargetIdFindingsIdRetest403ApplicationJSON;
    /**
     * Not found
     */
    postTargetsTargetIdFindingsIdRetest404ApplicationJSONObject?: PostTargetsTargetIdFindingsIdRetest404ApplicationJSON;
}
