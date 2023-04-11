import { SpeakeasyBase } from "../../../internal/utils";
import { DepositSwitchCreateRequestOptions } from "./depositswitchcreaterequestoptions";
/**
 * ISO-3166-1 alpha-2 country code standard.
 */
export declare enum DepositSwitchCreateRequestCountryCodeEnum {
    Us = "US",
    Ca = "CA"
}
/**
 * DepositSwitchCreateRequest defines the request schema for `/deposit_switch/create`
 */
export declare class DepositSwitchCreateRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * ISO-3166-1 alpha-2 country code standard.
     */
    countryCode?: DepositSwitchCreateRequestCountryCodeEnum;
    /**
     * Options to configure the `/deposit_switch/create` request. If provided, cannot be `null`.
     */
    options?: DepositSwitchCreateRequestOptions;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * Access token for the target Item, typically provided in the Import Item response.
     */
    targetAccessToken: string;
    /**
     * Plaid Account ID that specifies the target bank account. This account will become the recipient for a user's direct deposit.
     */
    targetAccountId: string;
}
