import { SpeakeasyBase } from "../../../internal/utils";
import { KeyUsageResult } from "./keyusageresult";
export declare enum ApiKeyUsageResponseCodeEnum {
    TwoThousand = "2000"
}
export declare enum ApiKeyUsageResponseMessageEnum {
    Success = "Success"
}
/**
 * Success
 */
export declare class ApiKeyUsageResponse extends SpeakeasyBase {
    code: ApiKeyUsageResponseCodeEnum;
    message: ApiKeyUsageResponseMessageEnum;
    result: KeyUsageResult;
}
