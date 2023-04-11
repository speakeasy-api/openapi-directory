import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether the account has auto-reloading enabled
 */
export declare enum AccountBalanceAutoReloadEnum {
    True = "true",
    False = "false"
}
/**
 * The current balance of your account
 */
export declare class AccountBalance extends SpeakeasyBase {
    /**
     * Whether the account has auto-reloading enabled
     */
    autoReload?: AccountBalanceAutoReloadEnum;
    /**
     * The balance of the account, in EUR
     */
    value?: number;
}
