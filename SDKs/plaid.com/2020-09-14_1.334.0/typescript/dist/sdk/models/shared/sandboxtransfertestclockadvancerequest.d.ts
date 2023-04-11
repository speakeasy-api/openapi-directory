import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the request schema for `/sandbox/transfer/test_clock/advance`
 */
export declare class SandboxTransferTestClockAdvanceRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The virtual timestamp on the test clock. This will be of the form `2006-01-02T15:04:05Z`.
     */
    newVirtualTime: Date;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * Plaid’s unique identifier for a test clock.
     */
    testClockId: string;
}
