import { SpeakeasyBase } from "../../../internal/utils";
/**
 * product
 */
export declare class UsersListSubscriptions1Product extends SpeakeasyBase {
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
export declare class UsersListSubscriptions1 extends SpeakeasyBase {
    /**
     * product
     */
    product?: UsersListSubscriptions1Product;
    /**
     * if the subscription is recurring or not
     */
    recurring?: boolean;
}
/**
 * SoundCloud User object
 */
export declare class UsersList extends SpeakeasyBase {
    /**
     * URL to a JPEG image
     */
    avatarUrl?: string;
    /**
     * city
     */
    city?: string;
    /**
     * country
     */
    country?: string;
    /**
     * description
     */
    description?: string;
    /**
     * discogs name
     */
    discogsName?: string;
    /**
     * first name
     */
    firstName?: string;
    /**
     * number of followers
     */
    followersCount?: number;
    /**
     * number of followed users
     */
    followingsCount?: number;
    /**
     * first and last name
     */
    fullName?: string;
    /**
     * unique identifier
     */
    id?: number;
    /**
     * kind of resource
     */
    kind?: string;
    /**
     * last modified datetime
     */
    lastModified?: Date;
    /**
     * last name
     */
    lastName?: string;
    /**
     * myspace name
     */
    myspaceName?: string;
    /**
     * permalink of the resource
     */
    permalink?: string;
    /**
     * URL to the SoundCloud.com page
     */
    permalinkUrl?: string;
    /**
     * subscription plan of the user
     */
    plan?: string;
    /**
     * number of public playlists
     */
    playlistCount?: number;
    /**
     * number of favorited public tracks
     */
    publicFavoritesCount?: number;
    /**
     * number of reposts from user
     */
    repostsCount?: number;
    /**
     * a list subscriptions associated with the user
     */
    subscriptions?: any[];
    /**
     * number of public tracks
     */
    trackCount?: number;
    /**
     * API resource URL
     */
    uri?: string;
    /**
     * username
     */
    username?: string;
    /**
     * a URL to the website
     */
    website?: string;
    /**
     * a custom title for the website
     */
    websiteTitle?: string;
}
