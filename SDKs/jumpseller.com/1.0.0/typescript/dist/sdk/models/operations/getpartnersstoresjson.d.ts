import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPartnersStoresJsonRequest extends SpeakeasyBase {
    /**
     * Partner authentication token.
     */
    authToken: string;
    /**
     * Statistics start date. Should be in format 'Y-m-d'.
     */
    from: string;
    /**
     * List page
     */
    page?: number;
    /**
     * Partner code.
     */
    partnerCode: string;
    /**
     * Statistics end date. Should be in format 'Y-m-d'.
     */
    to: string;
}
export declare class GetPartnersStoresJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request.
     */
    partnerError?: shared.PartnerError;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Array of partner stores statistics.
     */
    types?: shared.TypeT[];
}
