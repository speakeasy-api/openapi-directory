import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListFilesPurposeInEnum {
    CheckImageFront = "check_image_front",
    CheckImageBack = "check_image_back",
    Form1099Int = "form_1099_int",
    FormSs4 = "form_ss_4",
    IdentityDocument = "identity_document",
    IncreaseStatement = "increase_statement",
    Other = "other",
    TrustFormationDocument = "trust_formation_document",
    DigitalWalletArtwork = "digital_wallet_artwork",
    DigitalWalletAppIcon = "digital_wallet_app_icon",
    EntitySupplementalDocument = "entity_supplemental_document"
}
export declare class ListFilesRequest extends SpeakeasyBase {
    createdAtAfter?: Date;
    createdAtBefore?: Date;
    createdAtOnOrAfter?: Date;
    createdAtOnOrBefore?: Date;
    cursor?: string;
    limit?: number;
    purposeIn?: ListFilesPurposeInEnum[];
}
export declare enum ListFilesDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ListFilesDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ListFilesDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ListFilesDefaultApplicationJson13StatusEnum;
    title: string;
    type: ListFilesDefaultApplicationJson13TypeEnum;
}
export declare enum ListFilesDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListFilesDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ListFilesDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ListFilesDefaultApplicationJson12StatusEnum;
    title: string;
    type: ListFilesDefaultApplicationJson12TypeEnum;
}
export declare enum ListFilesDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListFilesDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ListFilesDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ListFilesDefaultApplicationJson11StatusEnum;
    title: string;
    type: ListFilesDefaultApplicationJson11TypeEnum;
}
export declare enum ListFilesDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ListFilesDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ListFilesDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ListFilesDefaultApplicationJson10StatusEnum;
    title: string;
    type: ListFilesDefaultApplicationJson10TypeEnum;
}
export declare enum ListFilesDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ListFilesDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ListFilesDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ListFilesDefaultApplicationJson9StatusEnum;
    title: string;
    type: ListFilesDefaultApplicationJson9TypeEnum;
}
export declare enum ListFilesDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListFilesDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ListFilesDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ListFilesDefaultApplicationJson8StatusEnum;
    title: string;
    type: ListFilesDefaultApplicationJson8TypeEnum;
}
export declare enum ListFilesDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ListFilesDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ListFilesDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ListFilesDefaultApplicationJson7StatusEnum;
    title: string;
    type: ListFilesDefaultApplicationJson7TypeEnum;
}
export declare enum ListFilesDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ListFilesDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ListFilesDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ListFilesDefaultApplicationJson6StatusEnum;
    title: string;
    type: ListFilesDefaultApplicationJson6TypeEnum;
}
export declare enum ListFilesDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListFilesDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ListFilesDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ListFilesDefaultApplicationJson5StatusEnum;
    title: string;
    type: ListFilesDefaultApplicationJson5TypeEnum;
}
export declare enum ListFilesDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ListFilesDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ListFilesDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ListFilesDefaultApplicationJson4StatusEnum;
    title: string;
    type: ListFilesDefaultApplicationJson4TypeEnum;
}
export declare enum ListFilesDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListFilesDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ListFilesDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ListFilesDefaultApplicationJson3StatusEnum;
    title: string;
    type: ListFilesDefaultApplicationJson3TypeEnum;
}
export declare enum ListFilesDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListFilesDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ListFilesDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ListFilesDefaultApplicationJson2StatusEnum;
    title: string;
    type: ListFilesDefaultApplicationJson2TypeEnum;
}
export declare enum ListFilesDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListFilesDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ListFilesDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ListFilesDefaultApplicationJson1StatusEnum;
    title: string;
    type: ListFilesDefaultApplicationJson1TypeEnum;
}
export declare class ListFilesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * File List
     */
    fileList?: shared.FileList;
}
