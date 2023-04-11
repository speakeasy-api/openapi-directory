import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The consumer-visible metadata of a subscription.
 */
export declare class SubscriptionListing extends SpeakeasyBase {
    /**
     * A list of benefits shown to the user on platforms such as the Play Store and in restoration flows in the language of this listing. Plain text. Ordered list of at most four benefits.
     */
    benefits?: string[];
    /**
     * The description of this subscription in the language of this listing. Maximum length - 80 characters. Plain text.
     */
    description?: string;
    /**
     * Required. The language of this listing, as defined by BCP-47, e.g. "en-US".
     */
    languageCode?: string;
    /**
     * Required. The title of this subscription in the language of this listing. Plain text.
     */
    title?: string;
}
