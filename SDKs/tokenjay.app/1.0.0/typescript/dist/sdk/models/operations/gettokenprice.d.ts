import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTokenPriceRequest extends SpeakeasyBase {
    tokenId: string;
}
export declare class GetTokenPriceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    getTokenPrice400WildcardString?: string;
    /**
     * Unauthorized
     */
    getTokenPrice401WildcardString?: string;
    /**
     * Not Found
     */
    getTokenPrice404WildcardString?: string;
    /**
     * Conflict
     */
    getTokenPrice409WildcardString?: string;
}
