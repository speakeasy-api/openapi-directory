import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdAssetsIdRequest extends SpeakeasyBase {
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
export declare class GetTargetsTargetIdAssetsId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargetsTargetIdAssetsId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class GetTargetsTargetIdAssetsId400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class GetTargetsTargetIdAssetsIdResponse extends SpeakeasyBase {
    /**
     * Asset object
     */
    asset?: shared.Asset;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    getTargetsTargetIdAssetsId400ApplicationJSONObject?: GetTargetsTargetIdAssetsId400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    getTargetsTargetIdAssetsId401ApplicationJSONObject?: GetTargetsTargetIdAssetsId401ApplicationJSON;
    /**
     * Not found
     */
    getTargetsTargetIdAssetsId404ApplicationJSONObject?: GetTargetsTargetIdAssetsId404ApplicationJSON;
}
