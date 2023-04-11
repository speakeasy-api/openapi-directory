import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PrepareTransactionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    prepareTransaction400WildcardString?: string;
    /**
     * Unauthorized
     */
    prepareTransaction401WildcardString?: string;
    /**
     * Not Found
     */
    prepareTransaction404WildcardString?: string;
    /**
     * Conflict
     */
    prepareTransaction409WildcardString?: string;
}
