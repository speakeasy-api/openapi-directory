import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchTargetsTargetIdAssetsIdRequest extends SpeakeasyBase {
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
export declare class PatchTargetsTargetIdAssetsId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PatchTargetsTargetIdAssetsId403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PatchTargetsTargetIdAssetsId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PatchTargetsTargetIdAssetsId400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PatchTargetsTargetIdAssetsIdResponse extends SpeakeasyBase {
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
    patchTargetsTargetIdAssetsId400ApplicationJSONObject?: PatchTargetsTargetIdAssetsId400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    patchTargetsTargetIdAssetsId401ApplicationJSONObject?: PatchTargetsTargetIdAssetsId401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    patchTargetsTargetIdAssetsId403ApplicationJSONObject?: PatchTargetsTargetIdAssetsId403ApplicationJSON;
    /**
     * Not found
     */
    patchTargetsTargetIdAssetsId404ApplicationJSONObject?: PatchTargetsTargetIdAssetsId404ApplicationJSON;
}
