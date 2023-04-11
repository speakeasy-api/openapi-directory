import { SpeakeasyBase } from "../../../internal/utils";
export declare class LicenseeEditableDaily extends SpeakeasyBase {
    /**
     * The maximum number of lookups this licensee can perform in a day. `null` indicates the limit is not active
     */
    limit?: number;
}
/**
 * Licensee object which can be defined by user
 */
export declare class LicenseeEditable extends SpeakeasyBase {
    /**
     * Licensee's first, second and third line address as well as post town concatenated by commas
     */
    address?: string;
    daily?: LicenseeEditableDaily;
    /**
     * Licensee individual or organisation name
     */
    name?: string;
    /**
     * Licensee's postcode
     */
    postcode?: string;
    /**
     * A list of allowed URLs. An empty list means that whitelisting is disabled
     */
    whitelist?: string[];
}
