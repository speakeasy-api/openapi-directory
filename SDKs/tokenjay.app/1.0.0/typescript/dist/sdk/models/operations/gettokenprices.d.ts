import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTokenPricesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    getTokenPrices400WildcardString?: string;
    /**
     * Unauthorized
     */
    getTokenPrices401WildcardString?: string;
    /**
     * Not Found
     */
    getTokenPrices404WildcardString?: string;
    /**
     * Conflict
     */
    getTokenPrices409WildcardString?: string;
}
