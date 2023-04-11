import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostTargetsTargetIdAssetsIdVerifyRequestBody extends SpeakeasyBase {
    /**
     * Type of verification:
     *
     * @remarks
     * * dns - we look or a TXT record on the host you registered containing
     * `Probely=<verification_token>`
     * * file - on the root of the path you registered we look for a file
     * named `<verification token>` containing `Probely`.
     *
     */
    type: shared.VerificationTypeEnum;
}
export declare class PostTargetsTargetIdAssetsIdVerifyRequest extends SpeakeasyBase {
    requestBody: PostTargetsTargetIdAssetsIdVerifyRequestBody;
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
export declare class PostTargetsTargetIdAssetsIdVerify404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PostTargetsTargetIdAssetsIdVerify403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PostTargetsTargetIdAssetsIdVerify401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PostTargetsTargetIdAssetsIdVerify400ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message
     */
    error?: string;
}
/**
 * Success
 */
export declare class PostTargetsTargetIdAssetsIdVerify200ApplicationJSON extends SpeakeasyBase {
    /**
     * Message
     */
    message?: string;
}
export declare class PostTargetsTargetIdAssetsIdVerifyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    postTargetsTargetIdAssetsIdVerify200ApplicationJSONObject?: PostTargetsTargetIdAssetsIdVerify200ApplicationJSON;
    /**
     * Bad Request
     */
    postTargetsTargetIdAssetsIdVerify400ApplicationJSONObject?: PostTargetsTargetIdAssetsIdVerify400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    postTargetsTargetIdAssetsIdVerify401ApplicationJSONObject?: PostTargetsTargetIdAssetsIdVerify401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    postTargetsTargetIdAssetsIdVerify403ApplicationJSONObject?: PostTargetsTargetIdAssetsIdVerify403ApplicationJSON;
    /**
     * Not found
     */
    postTargetsTargetIdAssetsIdVerify404ApplicationJSONObject?: PostTargetsTargetIdAssetsIdVerify404ApplicationJSON;
}
