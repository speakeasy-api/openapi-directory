import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ErrorCodeEnum {
    OneThousand = "1000",
    TenThousandAndOne = "10001"
}
export declare class ErrorT extends SpeakeasyBase {
    code: ErrorCodeEnum;
    message: string;
}
