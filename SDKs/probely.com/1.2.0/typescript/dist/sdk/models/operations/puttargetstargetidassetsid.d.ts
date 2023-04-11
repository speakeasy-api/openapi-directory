import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutTargetsTargetIdAssetsIdRequest extends SpeakeasyBase {
    assetInput: shared.AssetInput;
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
export declare class PutTargetsTargetIdAssetsId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PutTargetsTargetIdAssetsId403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PutTargetsTargetIdAssetsId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PutTargetsTargetIdAssetsId400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PutTargetsTargetIdAssetsIdResponse extends SpeakeasyBase {
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
    putTargetsTargetIdAssetsId400ApplicationJSONObject?: PutTargetsTargetIdAssetsId400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    putTargetsTargetIdAssetsId401ApplicationJSONObject?: PutTargetsTargetIdAssetsId401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    putTargetsTargetIdAssetsId403ApplicationJSONObject?: PutTargetsTargetIdAssetsId403ApplicationJSON;
    /**
     * Not found
     */
    putTargetsTargetIdAssetsId404ApplicationJSONObject?: PutTargetsTargetIdAssetsId404ApplicationJSON;
}
