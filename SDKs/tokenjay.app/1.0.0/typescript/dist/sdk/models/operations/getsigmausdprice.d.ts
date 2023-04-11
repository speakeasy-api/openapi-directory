import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSigmaUsdPriceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    getSigmaUsdPrice400WildcardString?: string;
    /**
     * Unauthorized
     */
    getSigmaUsdPrice401WildcardString?: string;
    /**
     * Not Found
     */
    getSigmaUsdPrice404WildcardString?: string;
    /**
     * Conflict
     */
    getSigmaUsdPrice409WildcardString?: string;
}
