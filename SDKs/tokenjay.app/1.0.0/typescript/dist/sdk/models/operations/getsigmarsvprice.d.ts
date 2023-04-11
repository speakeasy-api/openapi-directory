import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSigmaRsvPriceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    getSigmaRsvPrice400WildcardString?: string;
    /**
     * Unauthorized
     */
    getSigmaRsvPrice401WildcardString?: string;
    /**
     * Not Found
     */
    getSigmaRsvPrice404WildcardString?: string;
    /**
     * Conflict
     */
    getSigmaRsvPrice409WildcardString?: string;
}
