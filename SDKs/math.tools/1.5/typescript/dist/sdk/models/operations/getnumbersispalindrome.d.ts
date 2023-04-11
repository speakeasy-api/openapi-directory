import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNumbersIsPalindromeSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: string;
}
export declare class GetNumbersIsPalindromeRequest extends SpeakeasyBase {
    /**
     * Number to check
     */
    number?: number;
}
export declare class GetNumbersIsPalindromeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
