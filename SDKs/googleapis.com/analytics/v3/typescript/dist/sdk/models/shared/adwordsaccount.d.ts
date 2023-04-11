import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JSON template for an Google Ads account.
 */
export declare class AdWordsAccount extends SpeakeasyBase {
    /**
     * True if auto-tagging is enabled on the Google Ads account. Read-only after the insert operation.
     */
    autoTaggingEnabled?: boolean;
    /**
     * Customer ID. This field is required when creating a Google Ads link.
     */
    customerId?: string;
    /**
     * Resource type for Google Ads account.
     */
    kind?: string;
}
