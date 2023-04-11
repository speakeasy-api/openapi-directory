import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EmailResponseCodeEnum {
    TwoThousand = "2000"
}
export declare enum EmailResponseMessageEnum {
    Success = "Success"
}
/**
 * Success
 */
export declare class EmailResponse extends SpeakeasyBase {
    code: EmailResponseCodeEnum;
    message: EmailResponseMessageEnum;
    result: any;
}
