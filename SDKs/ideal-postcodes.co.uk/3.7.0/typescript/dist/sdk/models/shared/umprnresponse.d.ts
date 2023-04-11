import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UMPRNResponseCodeEnum {
    TwoThousand = "2000"
}
export declare enum UMPRNResponseMessageEnum {
    Success = "Success"
}
/**
 * Success
 */
export declare class UMPRNResponse extends SpeakeasyBase {
    code: UMPRNResponseCodeEnum;
    message: UMPRNResponseMessageEnum;
    result: any;
}
