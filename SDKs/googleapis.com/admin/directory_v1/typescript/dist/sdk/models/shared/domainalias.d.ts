import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class DomainAlias extends SpeakeasyBase {
    /**
     * The creation time of the domain alias. (Read-only).
     */
    creationTime?: string;
    /**
     * The domain alias name.
     */
    domainAliasName?: string;
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * Kind of resource this is.
     */
    kind?: string;
    /**
     * The parent domain name that the domain alias is associated with. This can either be a primary or secondary domain name within a customer.
     */
    parentDomainName?: string;
    /**
     * Indicates the verification state of a domain alias. (Read-only)
     */
    verified?: boolean;
}
