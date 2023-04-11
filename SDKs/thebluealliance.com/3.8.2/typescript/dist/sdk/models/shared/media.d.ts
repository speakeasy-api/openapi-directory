import { SpeakeasyBase } from "../../../internal/utils";
/**
 * String type of the media element.
 */
export declare enum MediaTypeEnum {
    Youtube = "youtube",
    Cdphotothread = "cdphotothread",
    Imgur = "imgur",
    FacebookProfile = "facebook-profile",
    YoutubeChannel = "youtube-channel",
    TwitterProfile = "twitter-profile",
    GithubProfile = "github-profile",
    InstagramProfile = "instagram-profile",
    PeriscopeProfile = "periscope-profile",
    Grabcad = "grabcad",
    InstagramImage = "instagram-image",
    ExternalLink = "external-link",
    Avatar = "avatar"
}
/**
 * The `Media` object contains a reference for most any media associated with a team or event on TBA.
 */
export declare class Media extends SpeakeasyBase {
    /**
     * If required, a JSON dict of additional media information.
     */
    details?: Record<string, any>;
    /**
     * Direct URL to the media.
     */
    directUrl?: string;
    /**
     * The key used to identify this media on the media site.
     */
    foreignKey: string;
    /**
     * True if the media is of high quality.
     */
    preferred?: boolean;
    /**
     * String type of the media element.
     */
    type: MediaTypeEnum;
    /**
     * The URL that leads to the full web page for the media, if one exists.
     */
    viewUrl?: string;
}
