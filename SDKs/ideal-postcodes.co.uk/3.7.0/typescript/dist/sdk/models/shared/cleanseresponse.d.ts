import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CleanseResponseCodeEnum {
    TwoThousand = "2000"
}
export declare enum CleanseResponseMessageEnum {
    Success = "Success"
}
/**
 * Success
 */
export declare class CleanseResponse extends SpeakeasyBase {
    code: CleanseResponseCodeEnum;
    message: CleanseResponseMessageEnum;
    result: any;
}
