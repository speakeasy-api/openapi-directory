import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAcmeExternalAccountBindingRequest extends SpeakeasyBase {
    /**
     * An identifier for a customer
     */
    customerId: string;
}
export declare class GetAcmeExternalAccountBindingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Acme key identifier and HMAC key for the external account binding. Directory URI is also provided for making ACME requests.
     */
    externalAccountBinding?: shared.ExternalAccountBinding;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
