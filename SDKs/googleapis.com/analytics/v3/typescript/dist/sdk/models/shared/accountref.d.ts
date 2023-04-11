import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JSON template for a linked account.
 */
export declare class AccountRef extends SpeakeasyBase {
    /**
     * Link for this account.
     */
    href?: string;
    /**
     * Account ID.
     */
    id?: string;
    /**
     * Analytics account reference.
     */
    kind?: string;
    /**
     * Account name.
     */
    name?: string;
}
