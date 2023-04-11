import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The site for which a verification token will be generated.
 */
export declare class SiteVerificationWebResourceGettokenRequestSite extends SpeakeasyBase {
    /**
     * The site identifier. If the type is set to SITE, the identifier is a URL. If the type is set to INET_DOMAIN, the site identifier is a domain name.
     */
    identifier?: string;
    /**
     * The type of resource to be verified. Can be SITE or INET_DOMAIN (domain name).
     */
    type?: string;
}
export declare class SiteVerificationWebResourceGettokenRequest extends SpeakeasyBase {
    /**
     * The site for which a verification token will be generated.
     */
    site?: SiteVerificationWebResourceGettokenRequestSite;
    /**
     * The verification method that will be used to verify this site. For sites, 'FILE' or 'META' methods may be used. For domains, only 'DNS' may be used.
     */
    verificationMethod?: string;
}
