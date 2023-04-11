import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The address and type of a site that is verified or will be verified.
 */
export declare class SiteVerificationWebResourceResourceSite extends SpeakeasyBase {
    /**
     * The site identifier. If the type is set to SITE, the identifier is a URL. If the type is set to INET_DOMAIN, the site identifier is a domain name.
     */
    identifier?: string;
    /**
     * The site type. Can be SITE or INET_DOMAIN (domain name).
     */
    type?: string;
}
/**
 * Successful response
 */
export declare class SiteVerificationWebResourceResource extends SpeakeasyBase {
    /**
     * The string used to identify this site. This value should be used in the "id" portion of the REST URL for the Get, Update, and Delete operations.
     */
    id?: string;
    /**
     * The email addresses of all verified owners.
     */
    owners?: string[];
    /**
     * The address and type of a site that is verified or will be verified.
     */
    site?: SiteVerificationWebResourceResourceSite;
}
