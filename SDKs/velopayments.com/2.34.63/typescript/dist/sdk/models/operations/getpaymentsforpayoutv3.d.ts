import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Payment Status
 *
 * @remarks
 * * ACCEPTED: any payment which was accepted at submission time (status may have changed since)
 * * REJECTED: any payment rejected by initial submission processing
 * * WITHDRAWN: any payment which has been withdrawn
 * * WITHDRAWABLE: any payment eligible for withdrawal
 *
 */
export declare enum GetPaymentsForPayoutV3StatusEnum {
    Accepted = "ACCEPTED",
    Rejected = "REJECTED",
    Withdrawn = "WITHDRAWN",
    Withdrawable = "WITHDRAWABLE"
}
/**
 * Transmission Type
 *
 * @remarks
 * * ACH
 * * SAME_DAY_ACH
 * * WIRE
 *
 */
export declare enum GetPaymentsForPayoutV3TransmissionTypeEnum {
    Ach = "ACH",
    SameDayAch = "SAME_DAY_ACH",
    Wire = "WIRE"
}
export declare class GetPaymentsForPayoutV3Request extends SpeakeasyBase {
    /**
     * Page number. Default is 1.
     */
    page?: number;
    /**
     * The number of results to return in a page
     */
    pageSize?: number;
    /**
     * Payment Memo of the Payment
     */
    paymentMemo?: string;
    /**
     * Payor's Id of the Payment
     */
    payorPaymentId?: string;
    /**
     * Id of the payout
     */
    payoutId: string;
    /**
     * The remote id of the payees.
     */
    remoteId?: string;
    /**
     * Physical Account Name
     */
    sourceAccountName?: string;
    /**
     * Payment Status
     *
     * @remarks
     * * ACCEPTED: any payment which was accepted at submission time (status may have changed since)
     * * REJECTED: any payment rejected by initial submission processing
     * * WITHDRAWN: any payment which has been withdrawn
     * * WITHDRAWABLE: any payment eligible for withdrawal
     *
     */
    status?: GetPaymentsForPayoutV3StatusEnum;
    /**
     * Transmission Type
     *
     * @remarks
     * * ACH
     * * SAME_DAY_ACH
     * * WIRE
     *
     */
    transmissionType?: GetPaymentsForPayoutV3TransmissionTypeEnum;
}
export declare class GetPaymentsForPayoutV3Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Payments for payout
     */
    pagedPaymentsResponseV3?: shared.PagedPaymentsResponseV3;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The resource was not found or is no longer available
     *
     * @remarks
     *
     */
    inlineResponse404?: shared.InlineResponse404;
}
