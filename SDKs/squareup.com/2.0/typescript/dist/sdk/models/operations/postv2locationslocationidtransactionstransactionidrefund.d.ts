import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV2LocationsLocationIdTransactionsTransactionIdRefundSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class PostV2LocationsLocationIdTransactionsTransactionIdRefundRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    createRefundRequest: shared.CreateRefundRequest;
    /**
     * The ID of the original transaction's associated location.
     */
    locationId: string;
    /**
     * The ID of the original transaction that includes the tender to refund.
     */
    transactionId: string;
}
export declare class PostV2LocationsLocationIdTransactionsTransactionIdRefundResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createRefundResponse?: shared.CreateRefundResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
