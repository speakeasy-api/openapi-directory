import { SpeakeasyBase } from "../../../internal/utils";
import { ProcessorBalanceGetRequestOptions } from "./processorbalancegetrequestoptions";
/**
 * ProcessorBalanceGetRequest defines the request schema for `/processor/balance/get`
 */
export declare class ProcessorBalanceGetRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * An optional object to filter `/processor/balance/get` results.
     */
    options?: ProcessorBalanceGetRequestOptions;
    /**
     * The processor token obtained from the Plaid integration partner. Processor tokens are in the format: `processor-<environment>-<identifier>`
     */
    processorToken: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
