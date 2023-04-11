import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveBalanceTransfersSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class RetrieveBalanceTransfersRequest extends SpeakeasyBase {
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
export declare class RetrieveBalanceTransfers404ApplicationJSON extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
/**
 * Credential is missing or invalid
 */
export declare class RetrieveBalanceTransfers401ApplicationJSON extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
export declare class RetrieveBalanceTransfersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * List balance transfers response
     */
    listBalanceTransfersResponse?: shared.ListBalanceTransfersResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Action is forbidden
     */
    unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;
    /**
     * Credential is missing or invalid
     */
    retrieveBalanceTransfers401ApplicationJSONObject?: RetrieveBalanceTransfers401ApplicationJSON;
    /**
     * The account ID provided does not exist in our system or you do not have access
     */
    retrieveBalanceTransfers404ApplicationJSONObject?: RetrieveBalanceTransfers404ApplicationJSON;
}
