import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveCreditTransfersSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class RetrieveCreditTransfersRequest extends SpeakeasyBase {
    /**
     * ID of the primary account.
     */
    apiKey: string;
    /**
     * End of the retrieval period. If absent then all transfers until now is returned.
     */
    endDate?: string;
    /**
     * Start of the retrieval period.
     */
    startDate: string;
    /**
     * Subaccount to filter by. You may send this multiple times to filter on multiple subaccounts
     */
    subaccount?: string;
}
/**
 * Invalid API Key
 */
export declare class RetrieveCreditTransfers404ApplicationJSON extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
/**
 * Credential is missing or invalid
 */
export declare class RetrieveCreditTransfers401ApplicationJSON extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
export declare class RetrieveCreditTransfersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * List credit transfers response
     */
    listCreditTransfersResponse?: shared.ListCreditTransfersResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Action is forbidden
     */
    unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;
    /**
     * Credential is missing or invalid
     */
    retrieveCreditTransfers401ApplicationJSONObject?: RetrieveCreditTransfers401ApplicationJSON;
    /**
     * The account ID provided does not exist in our system or you do not have access
     */
    retrieveCreditTransfers404ApplicationJSONObject?: RetrieveCreditTransfers404ApplicationJSON;
}
