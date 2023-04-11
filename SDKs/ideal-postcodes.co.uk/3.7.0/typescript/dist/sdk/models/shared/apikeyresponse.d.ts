import { SpeakeasyBase } from "../../../internal/utils";
import { ApiKey } from "./apikey";
export declare enum ApiKeyResponseCodeEnum {
    TwoThousand = "2000"
}
export declare enum ApiKeyResponseMessageEnum {
    Success = "Success"
}
/**
 * Success
 */
export declare class ApiKeyResponse extends SpeakeasyBase {
    code: ApiKeyResponseCodeEnum;
    message: ApiKeyResponseMessageEnum;
    result: ApiKey;
}
