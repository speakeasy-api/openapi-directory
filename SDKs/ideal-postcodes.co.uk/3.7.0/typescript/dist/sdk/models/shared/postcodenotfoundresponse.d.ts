import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostcodeNotFoundResponseCodeEnum {
    FourThousandAndForty = "4040"
}
export declare enum PostcodeNotFoundResponseMessageEnum {
    PostcodeNotFound = "Postcode not found"
}
/**
 * Postcode Not Found
 */
export declare class PostcodeNotFoundResponse extends SpeakeasyBase {
    code: PostcodeNotFoundResponseCodeEnum;
    message: PostcodeNotFoundResponseMessageEnum;
    /**
     * A list of alternate nearest matching postcodes you can try
     */
    suggestions: string[];
}
