import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AddPaymentRequestResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    addPaymentRequest400WildcardString?: string;
    /**
     * Unauthorized
     */
    addPaymentRequest401WildcardString?: string;
    /**
     * Not Found
     */
    addPaymentRequest404WildcardString?: string;
    /**
     * Conflict
     */
    addPaymentRequest409WildcardString?: string;
}
