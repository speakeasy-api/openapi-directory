import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a location of an end user.
 */
export declare class GoogleCloudPaymentsResellerSubscriptionV1Location extends SpeakeasyBase {
    /**
     * The postal code this location refers to. Ex. "94043"
     */
    postalCode?: string;
    /**
     * 2-letter ISO region code for current content region. Ex. “US” Please refers to: https://en.wikipedia.org/wiki/ISO_3166-1
     */
    regionCode?: string;
}
