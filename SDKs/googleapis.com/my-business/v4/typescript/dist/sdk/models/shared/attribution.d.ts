import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Attribution information for customer media items, such as the contributor's name and profile picture.
 */
export declare class Attribution extends SpeakeasyBase {
    /**
     * The user name to attribute the media item to.
     */
    profileName?: string;
    /**
     * URL of the attributed user's profile photo thumbnail.
     */
    profilePhotoUrl?: string;
    /**
     * The URL of the attributed user's Google Maps profile page.
     */
    profileUrl?: string;
    /**
     * The URL of the takedown page, where the media item can be reported if it is inappropriate.
     */
    takedownUrl?: string;
}
