import { SpeakeasyBase } from "../../../internal/utils";
export declare class ApiKeyCurrentPurchase extends SpeakeasyBase {
    /**
     * Number of consumed lookups off this purchase.
     */
    consumed: number;
    /**
     * `string` or `null` The date when this purchase will expire in simplified
     *
     * @remarks
     * extended ISO format (ISO 8601). This is typically 365 days from the time
     * of first use. This field will be `null` if the purchase has not yet been
     * used.
     */
    expires: string;
    /**
     * Number of procured lookups from this purchase.
     */
    purchased: number;
}
