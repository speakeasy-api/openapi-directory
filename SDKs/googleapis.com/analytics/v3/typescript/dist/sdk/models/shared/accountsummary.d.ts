import { SpeakeasyBase } from "../../../internal/utils";
import { WebPropertySummary } from "./webpropertysummary";
/**
 * JSON template for an Analytics AccountSummary. An AccountSummary is a lightweight tree comprised of properties/profiles.
 */
export declare class AccountSummary extends SpeakeasyBase {
    /**
     * Account ID.
     */
    id?: string;
    /**
     * Resource type for Analytics AccountSummary.
     */
    kind?: string;
    /**
     * Account name.
     */
    name?: string;
    /**
     * Indicates whether this account is starred or not.
     */
    starred?: boolean;
    /**
     * List of web properties under this account.
     */
    webProperties?: WebPropertySummary[];
}
