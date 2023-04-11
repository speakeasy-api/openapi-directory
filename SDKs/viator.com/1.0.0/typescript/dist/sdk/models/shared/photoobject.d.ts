import { SpeakeasyBase } from "../../../internal/utils";
/**
 * **object** detailing a single photo from a user
 */
export declare class PhotoObject extends SpeakeasyBase {
    /**
     * **HTML-formatted caption** for *this* photograph
     *
     * @remarks
     * - may contain basic HTML mark-up - e.g., br, li, b, u, p, i, ul and ol
     *
     */
    caption?: string;
    /**
     * **indicator**: `true` if *this* photograph has been tagged as an *editor's pick*; i.e., can be given preference for display
     */
    editorsPick?: boolean;
    /**
     * **URL** for the avatar image of the user that submitted *this* photograph
     */
    ownerAvatarURL?: string;
    /**
     * **country** in which the owner of *this* photograph is located
     */
    ownerCountry?: string;
    /**
     * **unique numeric identifier** of the user that owns the photograph
     */
    ownerId?: number;
    /**
     * **handle** of the user that submitted *this* photograph; e.g., 'Husker1k'
     */
    ownerName?: string;
    /**
     * **URL** of the high-resolution version of *this* photograph
     */
    photoHiResURL?: string;
    /**
     * **unique numeric identifier** of *this* photograph
     */
    photoId?: number;
    /**
     * **URL** of the medium-resolution version of *this* photograph
     */
    photoMediumResURL?: string;
    /**
     * **URL** for the standard-resolution version of *this* photograph
     */
    photoURL?: string;
    /**
     * **product code** for the product that *this* photograph is of
     */
    productCode?: string;
    /**
     * **natural-language title** of the product associated with *this* photograph; e.g., 'Sydney and Bondi Hop-on Hop-off Tour'
     */
    productTitle?: string;
    /**
     * **URL-formatted title** of the product associated with *this* photograph; e.g., `Sydney-and-Bondi-Hop-on-Hop-off-Tour`
     */
    productUrlName?: string;
    /**
     * **sort order** for *this* photograph; e.g., `3`
     */
    sortOrder?: number;
    /**
     * ignore (Viator only)
     */
    sslSupported?: boolean;
    /**
     * **URL** of *this* product's thumbnail image
     */
    thumbnailURL?: string;
    /**
     * **date** on which *this* photograph was submitted
     */
    timeUploaded?: string;
    /**
     * **title** of *this* photograph
     */
    title?: string;
}
