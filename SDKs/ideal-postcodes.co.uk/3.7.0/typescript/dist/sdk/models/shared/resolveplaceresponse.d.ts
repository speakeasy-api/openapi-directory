import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ResolvePlaceResponseCodeEnum {
    TwoThousand = "2000"
}
export declare enum ResolvePlaceResponseMessageEnum {
    Success = "Success"
}
/**
 * Success
 */
export declare class ResolvePlaceResponse extends SpeakeasyBase {
    code: ResolvePlaceResponseCodeEnum;
    message: ResolvePlaceResponseMessageEnum;
    result: any;
}
