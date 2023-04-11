import { SpeakeasyBase } from "../../../internal/utils";
/**
 * DepositSwitchTokenCreateRequest defines the request schema for `/deposit_switch/token/create`
 */
export declare class DepositSwitchTokenCreateRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The ID of the deposit switch
     */
    depositSwitchId: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
