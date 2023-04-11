import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostTargetsTargetIdSiteVerifyRequestBody extends SpeakeasyBase {
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
export declare class PostTargetsTargetIdSiteVerifyRequest extends SpeakeasyBase {
    requestBody: PostTargetsTargetIdSiteVerifyRequestBody;
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class PostTargetsTargetIdSiteVerify404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PostTargetsTargetIdSiteVerify403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PostTargetsTargetIdSiteVerify401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PostTargetsTargetIdSiteVerify400ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message
     */
    error?: string;
}
/**
 * Success
 */
export declare class PostTargetsTargetIdSiteVerify200ApplicationJSON extends SpeakeasyBase {
    /**
     * Message
     */
    message?: string;
}
export declare class PostTargetsTargetIdSiteVerifyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    postTargetsTargetIdSiteVerify200ApplicationJSONObject?: PostTargetsTargetIdSiteVerify200ApplicationJSON;
    /**
     * Bad Request
     */
    postTargetsTargetIdSiteVerify400ApplicationJSONObject?: PostTargetsTargetIdSiteVerify400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    postTargetsTargetIdSiteVerify401ApplicationJSONObject?: PostTargetsTargetIdSiteVerify401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    postTargetsTargetIdSiteVerify403ApplicationJSONObject?: PostTargetsTargetIdSiteVerify403ApplicationJSON;
    /**
     * Not found
     */
    postTargetsTargetIdSiteVerify404ApplicationJSONObject?: PostTargetsTargetIdSiteVerify404ApplicationJSON;
}
