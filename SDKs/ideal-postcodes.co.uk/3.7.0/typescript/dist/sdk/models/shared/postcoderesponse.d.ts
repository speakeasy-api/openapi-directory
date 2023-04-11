import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostcodeResponseCodeEnum {
    TwoThousand = "2000"
}
export declare enum PostcodeResponseMessageEnum {
    Success = "Success"
}
/**
 * Success
 */
export declare class PostcodeResponse extends SpeakeasyBase {
    code: PostcodeResponseCodeEnum;
    message: PostcodeResponseMessageEnum;
    /**
     * All addresses listed at the postcode.
     *
     * @remarks
     *
     * If Eircode is enabled, addreses for the Republic of Ireland will be returned in the English format.
     *
     */
    result: any[];
}
