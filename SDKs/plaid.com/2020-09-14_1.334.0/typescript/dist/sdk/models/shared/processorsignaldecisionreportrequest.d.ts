import { SpeakeasyBase } from "../../../internal/utils";
import { SignalDecisionOutcomeEnum } from "./signaldecisionoutcomeenum";
import { SignalPaymentMethodEnum } from "./signalpaymentmethodenum";
/**
 * ProcessorSignalDecisionReportRequest defines the request schema for `/processor/signal/decision/report`
 */
export declare class ProcessorSignalDecisionReportRequest extends SpeakeasyBase {
    /**
     * The amount (in USD) made available to your customers instantly following the debit transaction. It could be a partial amount of the requested transaction (example: 102.05).
     */
    amountInstantlyAvailable?: number;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * Must be the same as the `client_transaction_id` supplied when calling `/signal/evaluate`
     */
    clientTransactionId: string;
    /**
     * The actual number of days (hold time) since the ACH debit transaction that you wait before making funds available to your customers. The holding time could affect the ACH return rate.
     *
     * @remarks
     *
     * For example, use 0 if you make funds available to your customers instantly or the same day following the debit transaction, or 1 if you make funds available the next day following the debit initialization.
     */
    daysFundsOnHold?: number;
    /**
     * The payment decision from the risk assessment.
     *
     * @remarks
     *
     * `APPROVE`: approve the transaction without requiring further actions from your customers. For example, use this field if you are placing a standard hold for all the approved transactions before making funds available to your customers. You should also use this field if you decide to accelerate the fund availability for your customers.
     *
     * `REVIEW`: the transaction requires manual review
     *
     * `REJECT`: reject the transaction
     *
     * `TAKE_OTHER_RISK_MEASURES`: for example, placing a longer hold on funds than those approved transactions or introducing customer frictions such as step-up verification/authentication
     *
     * `NOT_EVALUATED`: if only logging the Signal results without using them
     *
     * Possible values:  `APPROVE`, `REVIEW`, `REJECT`, `TAKE_OTHER_RISK_MEASURES`, `NOT_EVALUATED`
     *
     */
    decisionOutcome?: SignalDecisionOutcomeEnum;
    /**
     * `true` if the ACH transaction was initiated, `false` otherwise.
     *
     * @remarks
     *
     * This field must be returned as a boolean. If formatted incorrectly, this will result in an [`INVALID_FIELD`](/docs/errors/invalid-request/#invalid_field) error.
     */
    initiated: boolean;
    /**
     * The payment method to complete the transaction after the risk assessment. It may be different from the default payment method.
     *
     * @remarks
     *
     * `SAME_DAY_ACH`: Same Day ACH by NACHA. The debit transaction is processed and settled on the same day
     *
     * `NEXT_DAY_ACH`: Next Day ACH settlement for debit transactions, offered by some payment processors
     *
     * `STANDARD_ACH`: standard ACH by NACHA
     *
     * `REAL_TIME_PAYMENTS`: real-time payments such as RTP and FedNow
     *
     * `DEBIT_CARD`: if the default payment is over debit card networks
     *
     * `MULTIPLE_PAYMENT_METHODS`: if there is no default debit rail or there are multiple payment methods
     *
     * Possible values: `SAME_DAY_ACH`, `NEXT_DAY_ACH`, `STANDARD_ACH`, `REAL_TIME_PAYMENTS`, `DEBIT_CARD`, `MULTIPLE_PAYMENT_METHODS`
     *
     */
    paymentMethod?: SignalPaymentMethodEnum;
    /**
     * The processor token obtained from the Plaid integration partner. Processor tokens are in the format: `processor-<environment>-<identifier>`
     */
    processorToken: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
