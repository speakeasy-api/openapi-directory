import { SpeakeasyBase } from "../../../internal/utils";
import { CustomAccount } from "./customaccount";
import { GoogleAccount } from "./googleaccount";
/**
 * Scan authentication configuration.
 */
export declare class Authentication extends SpeakeasyBase {
    /**
     * Describes authentication configuration that uses a custom account.
     */
    customAccount?: CustomAccount;
    /**
     * Describes authentication configuration that uses a Google account.
     */
    googleAccount?: GoogleAccount;
}
