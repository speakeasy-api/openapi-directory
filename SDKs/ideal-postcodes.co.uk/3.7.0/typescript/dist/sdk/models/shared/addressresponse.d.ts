import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AddressResponseCodeEnum {
    TwoThousand = "2000"
}
export declare enum AddressResponseMessageEnum {
    Success = "Success"
}
export declare class AddressResponseResult extends SpeakeasyBase {
    /**
     * List of matching addresses
     *
     * @remarks
     *
     */
    hits: any[];
    limit: number;
    page: number;
    total: number;
}
/**
 * Success
 */
export declare class AddressResponse extends SpeakeasyBase {
    code: AddressResponseCodeEnum;
    message: AddressResponseMessageEnum;
    result: AddressResponseResult;
}
