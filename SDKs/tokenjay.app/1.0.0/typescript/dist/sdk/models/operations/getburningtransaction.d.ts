import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetBurningTransactionRequest extends SpeakeasyBase {
    uuid: string;
}
export declare class GetBurningTransactionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    getBurningTransaction400WildcardString?: string;
    /**
     * Unauthorized
     */
    getBurningTransaction401WildcardString?: string;
    /**
     * Not Found
     */
    getBurningTransaction404WildcardString?: string;
    /**
     * Conflict
     */
    getBurningTransaction409WildcardString?: string;
}
