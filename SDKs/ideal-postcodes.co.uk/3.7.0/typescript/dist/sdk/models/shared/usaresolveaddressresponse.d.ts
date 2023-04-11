import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UsaResolveAddressResponseCodeEnum {
    TwoThousand = "2000"
}
export declare enum UsaResolveAddressResponseMessageEnum {
    Success = "Success"
}
/**
 * Success
 */
export declare class UsaResolveAddressResponse extends SpeakeasyBase {
    code: UsaResolveAddressResponseCodeEnum;
    message: UsaResolveAddressResponseMessageEnum;
    result: any;
}
