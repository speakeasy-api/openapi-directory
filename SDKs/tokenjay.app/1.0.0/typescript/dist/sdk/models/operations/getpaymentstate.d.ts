import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPaymentStateRequest extends SpeakeasyBase {
    requestId: string;
}
export declare class GetPaymentStateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    getPaymentState400WildcardString?: string;
    /**
     * Unauthorized
     */
    getPaymentState401WildcardString?: string;
    /**
     * Not Found
     */
    getPaymentState404WildcardString?: string;
    /**
     * Conflict
     */
    getPaymentState409WildcardString?: string;
}
