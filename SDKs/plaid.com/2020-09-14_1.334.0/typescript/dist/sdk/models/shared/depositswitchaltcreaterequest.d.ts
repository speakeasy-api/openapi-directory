import { SpeakeasyBase } from "../../../internal/utils";
import { DepositSwitchCreateRequestOptions } from "./depositswitchcreaterequestoptions";
/**
 * ISO-3166-1 alpha-2 country code standard.
 */
export declare enum DepositSwitchAltCreateRequestCountryCodeEnum {
    Us = "US",
    Ca = "CA"
}
/**
 * DepositSwitchAltCreateRequest defines the request schema for `/deposit_switch/alt/create`
 */
export declare class DepositSwitchAltCreateRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * ISO-3166-1 alpha-2 country code standard.
     */
    countryCode?: DepositSwitchAltCreateRequestCountryCodeEnum;
    /**
     * Options to configure the `/deposit_switch/create` request. If provided, cannot be `null`.
     */
    options?: DepositSwitchCreateRequestOptions;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * The deposit switch destination account
     */
    targetAccount: Record<string, any>;
    /**
     * The deposit switch target user
     */
    targetUser: Record<string, any>;
}
