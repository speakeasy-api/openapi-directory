import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PhoneNumberResponseCodeEnum {
    TwoThousand = "2000"
}
export declare enum PhoneNumberResponseMessageEnum {
    Success = "Success"
}
/**
 * Success
 */
export declare class PhoneNumberResponse extends SpeakeasyBase {
    code: PhoneNumberResponseCodeEnum;
    message: PhoneNumberResponseMessageEnum;
    result: any;
}
