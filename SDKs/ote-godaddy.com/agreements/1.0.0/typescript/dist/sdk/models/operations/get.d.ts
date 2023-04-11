import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the Market used to retrieve/translate Legal Agreements
     */
    xMarketId?: string;
    /**
     * PrivateLabelId to operate as, if different from JWT
     */
    xPrivateLabelId?: number;
    /**
     * Keys for Agreements whose details are to be retrieved
     */
    keys: string[];
}
export declare class GetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Request was malformed
     */
    error?: shared.ErrorT;
    /**
     * Too many requests received within interval
     */
    errorLimit?: shared.ErrorLimit;
    /**
     * Request was successful
     */
    legalAgreements?: shared.LegalAgreement[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
