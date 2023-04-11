import { SpeakeasyBase } from "../../../internal/utils";
export declare class LicenseeDaily extends SpeakeasyBase {
    /**
     * The number lookups performed by the licensee on the day represented b `licesees.daily.updatedAt`
     */
    count: number;
    /**
     * The timestamp when the limit was last used.
     */
    updatedAt: string;
}
/**
 * Licensee object which can be defined by user
 */
export declare class Licensee extends SpeakeasyBase {
    /**
     * Licensee's first, second and third line address as well as post town concatenated by commas
     */
    address: string;
    /**
     * Timestamp for when the licensee was created
     */
    createdAt: string;
    daily: LicenseeDaily;
    /**
     * An immutable ID provided for every licensee. Primarily used for paginated list requests.
     *
     * @remarks
     *
     */
    id: string;
    /**
     * Uniquely identifies a licensee for a key.
     *
     * @remarks
     *
     * Required to perform paid lookups for a specific licensee. Typically begins `sk_`.
     *
     */
    key: string;
    /**
     * Licensee individual or organisation name
     */
    name: string;
    /**
     * Licensee's postcode
     */
    postcode: string;
    /**
     * A list of allowed URLs. An empty list means that whitelisting is disabled
     */
    whitelist: string[];
}
