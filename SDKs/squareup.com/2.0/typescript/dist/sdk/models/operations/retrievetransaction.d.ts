import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveTransactionSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrieveTransactionRequest extends SpeakeasyBase {
    /**
     * The ID of the transaction's associated location.
     */
    locationId: string;
    /**
     * The ID of the transaction to retrieve.
     */
    transactionId: string;
}
export declare class RetrieveTransactionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    retrieveTransactionResponse?: shared.RetrieveTransactionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
