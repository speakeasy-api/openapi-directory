import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GbrResolveAddressResponseCodeEnum {
    TwoThousand = "2000"
}
export declare enum GbrResolveAddressResponseMessageEnum {
    Success = "Success"
}
/**
 * Success
 */
export declare class GbrResolveAddressResponse extends SpeakeasyBase {
    code: GbrResolveAddressResponseCodeEnum;
    message: GbrResolveAddressResponseMessageEnum;
    result: any;
}
