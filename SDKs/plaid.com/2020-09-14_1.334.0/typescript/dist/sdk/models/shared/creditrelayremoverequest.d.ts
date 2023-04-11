import { SpeakeasyBase } from "../../../internal/utils";
/**
 * CreditRelayRemoveRequest defines the request schema for `/credit/relay/remove`
 */
export declare class CreditRelayRemoveRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The `relay_token` you would like to revoke.
     */
    relayToken: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
