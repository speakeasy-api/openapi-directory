import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ErgoPayCreateBabelBoxRequest extends SpeakeasyBase {
    address: string;
    ergAmount: number;
    tokenAmount: number;
    tokenId: string;
}
export declare class ErgoPayCreateBabelBoxResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    ergoPayCreateBabelBox400WildcardString?: string;
    /**
     * Unauthorized
     */
    ergoPayCreateBabelBox401WildcardString?: string;
    /**
     * Not Found
     */
    ergoPayCreateBabelBox404WildcardString?: string;
    /**
     * Conflict
     */
    ergoPayCreateBabelBox409WildcardString?: string;
}
