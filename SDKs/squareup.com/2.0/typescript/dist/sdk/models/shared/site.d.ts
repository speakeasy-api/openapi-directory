import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a Square Online site, which is an online store for a Square seller.
 */
export declare class Site extends SpeakeasyBase {
    /**
     * The timestamp of when the site was created, in RFC 3339 format.
     */
    createdAt?: string;
    /**
     * The domain of the site (without the protocol). For example, `mysite1.square.site`.
     */
    domain?: string;
    /**
     * The Square-assigned ID of the site.
     */
    id?: string;
    /**
     * Indicates whether the site is published.
     */
    isPublished?: boolean;
    /**
     * The title of the site.
     */
    siteTitle?: string;
    /**
     * The timestamp of when the site was last updated, in RFC 3339 format.
     */
    updatedAt?: string;
}
