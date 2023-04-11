import { SpeakeasyBase } from "../../../internal/utils";
import { PublisherProfileMobileApplication } from "./publisherprofilemobileapplication";
/**
 * The values in the publisher profile are supplied by the publisher. All fields are not filterable unless stated otherwise.
 */
export declare class PublisherProfile extends SpeakeasyBase {
    /**
     * Description on the publisher's audience.
     */
    audienceDescription?: string;
    /**
     * Contact information for direct reservation deals. This is free text entered by the publisher and may include information like names, phone numbers and email addresses.
     */
    directDealsContact?: string;
    /**
     * Display name of the publisher profile. Can be used to filter the response of the publisherProfiles.list method.
     */
    displayName?: string;
    /**
     * The list of domains represented in this publisher profile. Empty if this is a parent profile. These are top private domains, meaning that these will not contain a string like "photos.google.co.uk/123", but will instead contain "google.co.uk". Can be used to filter the response of the publisherProfiles.list method.
     */
    domains?: string[];
    /**
     * Indicates if this profile is the parent profile of the seller. A parent profile represents all the inventory from the seller, as opposed to child profile that is created to brand a portion of inventory. One seller has only one parent publisher profile, and can have multiple child profiles. See https://support.google.com/admanager/answer/6035806 for details. Can be used to filter the response of the publisherProfiles.list method by setting the filter to "is_parent: true".
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
     * Name of the publisher profile. Format: `buyers/{buyer}/publisherProfiles/{publisher_profile}`
     */
    name?: string;
    /**
     * Overview of the publisher.
     */
    overview?: string;
    /**
     * Statement explaining what's unique about publisher's business, and why buyers should partner with the publisher.
     */
    pitchStatement?: string;
    /**
     * Contact information for programmatic deals. This is free text entered by the publisher and may include information like names, phone numbers and email addresses.
     */
    programmaticDealsContact?: string;
    /**
     * A unique identifying code for the seller. This value is the same for all of the seller's parent and child publisher profiles. Can be used to filter the response of the publisherProfiles.list method.
     */
    publisherCode?: string;
    /**
     * URL to a sample content page.
     */
    samplePageUrl?: string;
    /**
     * Up to three key metrics and rankings. For example, "#1 Mobile News Site for 20 Straight Months".
     */
    topHeadlines?: string[];
}
