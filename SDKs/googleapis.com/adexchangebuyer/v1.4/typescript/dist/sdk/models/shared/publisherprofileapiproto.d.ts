import { SpeakeasyBase } from "../../../internal/utils";
import { MobileApplication } from "./mobileapplication";
import { PublisherProvidedForecast } from "./publisherprovidedforecast";
import { Seller } from "./seller";
export declare class PublisherProfileApiProto extends SpeakeasyBase {
    /**
     * Publisher provided info on its audience.
     */
    audience?: string;
    /**
     * A pitch statement for the buyer
     */
    buyerPitchStatement?: string;
    /**
     * Direct contact for the publisher profile.
     */
    directContact?: string;
    /**
     * Exchange where this publisher profile is from. E.g. AdX, Rubicon etc...
     */
    exchange?: string;
    forecastInventory?: string;
    /**
     * Link to publisher's Google+ page.
     */
    googlePlusLink?: string;
    /**
     * True, if this is the parent profile, which represents all domains owned by the publisher.
     */
    isParent?: boolean;
    /**
     * True, if this profile is published. Deprecated for state.
     */
    isPublished?: boolean;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#publisherProfileApiProto".
     */
    kind?: string;
    /**
     * The url to the logo for the publisher.
     */
    logoUrl?: string;
    /**
     * The url for additional marketing and sales materials.
     */
    mediaKitLink?: string;
    name?: string;
    /**
     * Publisher provided overview.
     */
    overview?: string;
    /**
     * The pair of (seller.account_id, profile_id) uniquely identifies a publisher profile for a given publisher.
     */
    profileId?: number;
    /**
     * Programmatic contact for the publisher profile.
     */
    programmaticContact?: string;
    /**
     * The list of app IDs represented in this publisher profile. Empty if this is a parent profile. Deprecated in favor of publisher_app.
     */
    publisherAppIds?: string[];
    /**
     * The list of apps represented in this publisher profile. Empty if this is a parent profile.
     */
    publisherApps?: MobileApplication[];
    /**
     * The list of domains represented in this publisher profile. Empty if this is a parent profile.
     */
    publisherDomains?: string[];
    /**
     * Unique Id for publisher profile.
     */
    publisherProfileId?: string;
    /**
     * This message carries publisher provided forecasting information.
     */
    publisherProvidedForecast?: PublisherProvidedForecast;
    /**
     * Link to publisher rate card
     */
    rateCardInfoLink?: string;
    /**
     * Link for a sample content page.
     */
    samplePageLink?: string;
    seller?: Seller;
    /**
     * State of the publisher profile.
     */
    state?: string;
    /**
     * Publisher provided key metrics and rankings.
     */
    topHeadlines?: string[];
}
