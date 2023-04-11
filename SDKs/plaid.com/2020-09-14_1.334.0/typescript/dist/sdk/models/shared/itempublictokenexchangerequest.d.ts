import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ItemPublicTokenExchangeRequest defines the request schema for `/item/public_token/exchange`
 */
export declare class ItemPublicTokenExchangeRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * Your `public_token`, obtained from the Link `onSuccess` callback or `/sandbox/item/public_token/create`.
     */
    publicToken: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
