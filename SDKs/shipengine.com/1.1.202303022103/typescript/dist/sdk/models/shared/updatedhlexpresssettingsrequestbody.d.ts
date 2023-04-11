import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A DHL Express account settings
 */
export declare class UpdateDhlExpressSettingsRequestBody extends SpeakeasyBase {
    /**
     * Indicates if this is primary account
     */
    isPrimaryAccount?: boolean;
    /**
     * Account nickname
     */
    nickname?: string;
    /**
     * Indicates if the account number should be hidden on the archive documentation
     */
    shouldHideAccountNumberOnArchiveDoc?: boolean;
}
