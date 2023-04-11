import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UDPRNResponseCodeEnum {
    TwoThousand = "2000"
}
export declare enum UDPRNResponseMessageEnum {
    Success = "Success"
}
/**
 * Success
 */
export declare class UDPRNResponse extends SpeakeasyBase {
    code: UDPRNResponseCodeEnum;
    message: UDPRNResponseMessageEnum;
    result: any;
}
