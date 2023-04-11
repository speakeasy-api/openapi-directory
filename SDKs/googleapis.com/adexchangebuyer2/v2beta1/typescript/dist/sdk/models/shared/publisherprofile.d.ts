import { SpeakeasyBase } from "../../../internal/utils";
import { PublisherProfileMobileApplication } from "./publisherprofilemobileapplication";
import { Seller } from "./seller";
/**
 * Represents a publisher profile (https://support.google.com/admanager/answer/6035806) in Marketplace. All fields are read only. All string fields are free-form text entered by the publisher unless noted otherwise.
 */
export declare class PublisherProfile extends SpeakeasyBase {
    /**
     * Description on the publisher's audience.
     */
    audienceDescription?: string;
    /**
     * Statement explaining what's unique about publisher's business, and why buyers should partner with the publisher.
     */
    buyerPitchStatement?: string;
    /**
     * Contact information for direct reservation deals. This is free text entered by the publisher and may include information like names, phone numbers and email addresses.
     */
    directDealsContact?: string;
    /**
     * Name of the publisher profile.
     */
    displayName?: string;
    /**
     * The list of domains represented in this publisher profile. Empty if this is a parent profile. These are top private domains, meaning that these will not contain a string like "photos.google.co.uk/123", but will instead contain "google.co.uk".
     */
    domains?: string[];
    /**
     * URL to publisher's Google+ page.
     */
    googlePlusUrl?: string;
    /**
     * Indicates if this profile is the parent profile of the seller. A parent profile represents all the inventory from the seller, as opposed to child profile that is created to brand a portion of inventory. One seller should have only one parent publisher profile, and can have multiple child profiles. Publisher profiles for the same seller will have same value of field google.ads.adexchange.buyer.v2beta1.PublisherProfile.seller. See https://support.google.com/admanager/answer/6035806 for details.
     */
    isParent?: boolean;
    /**
     * A Google public URL to the logo for this publisher profile. The logo is stored as a PNG, JPG, or GIF image.
     */
    logoUrl?: string;
    /**
     * URL to additional marketing and sales materials.
     */
    mediaKitUrl?: string;
    /**
     * The list of apps represented in this publisher profile. Empty if this is a parent profile.
     */
    mobileApps?: PublisherProfileMobileApplication[];
    /**
     * Overview of the publisher.
     */
    overview?: string;
    /**
     * Contact information for programmatic deals. This is free text entered by the publisher and may include information like names, phone numbers and email addresses.
     */
    programmaticDealsContact?: string;
    /**
     * Unique ID for publisher profile.
     */
    publisherProfileId?: string;
    /**
     * URL to a publisher rate card.
     */
    rateCardInfoUrl?: string;
    /**
     * URL to a sample content page.
     */
    samplePageUrl?: string;
    /**
     * Represents a seller of inventory. Each seller is identified by a unique Ad Manager account ID.
     */
    seller?: Seller;
    /**
     * Up to three key metrics and rankings. Max 100 characters each. For example "#1 Mobile News Site for 20 Straight Months".
     */
    topHeadlines?: string[];
}
