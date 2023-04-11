import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ErrorCodeEnum {
    Forbidden = "Forbidden",
    InvalidParameter = "InvalidParameter",
    InvalidBodyParameter = "InvalidBodyParameter",
    ResourceNotFound = "ResourceNotFound",
    Unauthorized = "Unauthorized",
    InvalidCredentials = "InvalidCredentials",
    InvalidGrantType = "InvalidGrantType"
}
export declare class ErrorSource extends SpeakeasyBase {
    parameter?: string;
    pointer?: string;
}
export declare class ErrorT extends SpeakeasyBase {
    code?: ErrorCodeEnum;
    detail?: string;
    source?: ErrorSource;
    status?: string;
    title?: string;
}
