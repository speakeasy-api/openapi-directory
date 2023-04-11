import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ProcessorSignalReturnReportRequest defines the request schema for `/processor/signal/return/report`
 */
export declare class ProcessorSignalReturnReportRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * Must be the same as the `client_transaction_id` supplied when calling `/processor/signal/evaluate`
     */
    clientTransactionId: string;
    /**
     * The processor token obtained from the Plaid integration partner. Processor tokens are in the format: `processor-<environment>-<identifier>`
     */
    processorToken: string;
    /**
     * Must be a valid ACH return code (e.g. "R01")
     *
     * @remarks
     *
     * If formatted incorrectly, this will result in an [`INVALID_FIELD`](/docs/errors/invalid-request/#invalid_field) error.
     */
    returnCode: string;
    /**
     * Date and time when you receive the returns from your payment processors, in ISO 8601 format (`YYYY-MM-DDTHH:mm:ssZ`).
     */
    returnedAt?: Date;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
