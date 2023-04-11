import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CheckTokenRequest extends SpeakeasyBase {
    tokenId: string;
    tokenName: string;
}
export declare class CheckTokenResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    checkToken400WildcardString?: string;
    /**
     * Unauthorized
     */
    checkToken401WildcardString?: string;
    /**
     * Not Found
     */
    checkToken404WildcardString?: string;
    /**
     * Conflict
     */
    checkToken409WildcardString?: string;
}
