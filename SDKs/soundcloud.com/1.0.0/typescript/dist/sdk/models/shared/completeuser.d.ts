import { SpeakeasyBase } from "../../../internal/utils";
/**
 * user's upload quota
 */
export declare class CompleteUserQuota extends SpeakeasyBase {
    /**
     * unlimited upload quota.
     */
    unlimitedUploadQuota?: boolean;
    /**
     * upload seconds used.
     */
    uploadSecondsUsed?: number;
}
/**
 * product
 */
export declare class CompleteUserSubscriptions1Product extends SpeakeasyBase {
    /**
     * subscription id instance.
     */
    id?: string;
    /**
     * subscription name instance.
     */
    name?: string;
}
/**
 * subscription
 */
export declare class CompleteUserSubscriptions1 extends SpeakeasyBase {
    /**
     * product
     */
    product?: CompleteUserSubscriptions1Product;
    /**
     * if the subscription is recurring or not
     */
    recurring?: boolean;
}
/**
 * SoundCloud Complete User object
 */
export declare class CompleteUser extends SpeakeasyBase {
    /**
     * URL to a JPEG image.
     */
    avatarUrl?: string;
    /**
     * city.
     */
    city?: string;
    /**
     * country.
     */
    country?: string;
    /**
     * description.
     */
    description?: string;
    /**
     * discogs name.
     */
    discogsName?: string;
    /**
     * first name.
     */
    firstName?: string;
    /**
     * number of followers.
     */
    followersCount?: number;
    /**
     * number of followed users.
     */
    followingsCount?: number;
    /**
     * first and last name.
     */
    fullName?: string;
    /**
     * unique identifier
     */
    id?: number;
    /**
     * kind of resource.
     */
    kind?: string;
    /**
     * last modified timestamp.
     */
    lastModified?: string;
    /**
     * last name.
     */
    lastName?: string;
    /**
     * locale.
     */
    locale?: string;
    /**
     * myspace name
     */
    myspaceName?: string;
    /**
     * permalink of the resource.
     */
    permalink?: string;
    /**
     * URL to the SoundCloud.com page.
     */
    permalinkUrl?: string;
    /**
     * subscription plan of the user.
     */
    plan?: string;
    /**
     * number of public playlists.
     */
    playlistCount?: number;
    /**
     * boolean if email is confirmed.
     */
    primaryEmailConfirmed?: boolean;
    /**
     * number of private playlists.
     */
    privatePlaylistsCount?: number;
    /**
     * number of private tracks.
     */
    privateTracksCount?: number;
    /**
     * number of favorited public tracks
     */
    publicFavoritesCount?: number;
    /**
     * user's upload quota
     */
    quota?: CompleteUserQuota;
    /**
     * number of reposts from user
     */
    repostsCount?: number;
    /**
     * a list subscriptions associated with the user
     */
    subscriptions?: any[];
    /**
     * number of public tracks.
     */
    trackCount?: number;
    /**
     * API resource URL.
     */
    uri?: string;
    /**
     * username
     */
    username?: string;
    /**
     * a URL to the website.
     */
    website?: string;
    /**
     * a custom title for the website.
     */
    websiteTitle?: string;
}
