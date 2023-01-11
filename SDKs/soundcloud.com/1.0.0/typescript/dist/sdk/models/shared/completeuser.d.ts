import { SpeakeasyBase } from "../../../internal/utils";
/**
 * user's upload quota
**/
export declare class CompleteUserQuota extends SpeakeasyBase {
    unlimitedUploadQuota?: boolean;
    uploadSecondsUsed?: number;
}
/**
 * SoundCloud Complete User object
**/
export declare class CompleteUser extends SpeakeasyBase {
    avatarUrl?: string;
    city?: string;
    country?: string;
    description?: string;
    discogsName?: string;
    firstName?: string;
    followersCount?: number;
    followingsCount?: number;
    fullName?: string;
    id?: number;
    kind?: string;
    lastModified?: string;
    lastName?: string;
    locale?: string;
    myspaceName?: string;
    permalink?: string;
    permalinkUrl?: string;
    plan?: string;
    playlistCount?: number;
    primaryEmailConfirmed?: boolean;
    privatePlaylistsCount?: number;
    privateTracksCount?: number;
    publicFavoritesCount?: number;
    quota?: CompleteUserQuota;
    repostsCount?: number;
    subscriptions?: any;
    trackCount?: number;
    uri?: string;
    username?: string;
    website?: string;
    websiteTitle?: string;
}
