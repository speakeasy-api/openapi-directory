import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The redirect status code.
 */
export declare enum DomainRedirectTypeEnum {
    RedirectTypeUnspecified = "REDIRECT_TYPE_UNSPECIFIED",
    MovedPermanently = "MOVED_PERMANENTLY"
}
/**
 * Defines the behavior of a domain-level redirect. Domain redirects preserve the path of the redirect but replace the requested domain with the one specified in the redirect configuration.
 */
export declare class DomainRedirect extends SpeakeasyBase {
    /**
     * Required. The domain name to redirect to.
     */
    domainName?: string;
    /**
     * Required. The redirect status code.
     */
    type?: DomainRedirectTypeEnum;
}
