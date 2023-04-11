import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JSON template for a profile filter link.
 */
export declare class FilterRefInput extends SpeakeasyBase {
    /**
     * Link for this filter.
     */
    href?: string;
    /**
     * Filter ID.
     */
    id?: string;
    /**
     * Kind value for filter reference.
     */
    kind?: string;
}
/**
 * JSON template for a profile filter link.
 */
export declare class FilterRef extends SpeakeasyBase {
    /**
     * Account ID to which this filter belongs.
     */
    accountId?: string;
    /**
     * Link for this filter.
     */
    href?: string;
    /**
     * Filter ID.
     */
    id?: string;
    /**
     * Kind value for filter reference.
     */
    kind?: string;
    /**
     * Name of this filter.
     */
    name?: string;
}
