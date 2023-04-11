import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostTargetsTargetIdAssetsRequest extends SpeakeasyBase {
    assetInput: shared.AssetInput;
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class PostTargetsTargetIdAssets404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PostTargetsTargetIdAssets403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PostTargetsTargetIdAssets401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PostTargetsTargetIdAssets400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostTargetsTargetIdAssetsResponse extends SpeakeasyBase {
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
    postTargetsTargetIdAssets400ApplicationJSONObject?: PostTargetsTargetIdAssets400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    postTargetsTargetIdAssets401ApplicationJSONObject?: PostTargetsTargetIdAssets401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    postTargetsTargetIdAssets403ApplicationJSONObject?: PostTargetsTargetIdAssets403ApplicationJSON;
    /**
     * Not found
     */
    postTargetsTargetIdAssets404ApplicationJSONObject?: PostTargetsTargetIdAssets404ApplicationJSON;
}
