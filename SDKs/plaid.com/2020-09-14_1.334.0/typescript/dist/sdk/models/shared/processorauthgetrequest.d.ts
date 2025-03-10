import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ProcessorAuthGetRequest defines the request schema for `/processor/auth/get`
 */
export declare class ProcessorAuthGetRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The processor token obtained from the Plaid integration partner. Processor tokens are in the format: `processor-<environment>-<identifier>`
     */
    processorToken: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
