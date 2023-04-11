import { SpeakeasyBase } from "../../../internal/utils";
import { DomainAlias } from "./domainalias";
/**
 * Successful response
 */
export declare class Domains extends SpeakeasyBase {
    /**
     * Creation time of the domain. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format. (Read-only).
     */
    creationTime?: string;
    /**
     * A list of domain alias objects. (Read-only)
     */
    domainAliases?: DomainAlias[];
    /**
     * The domain name of the customer.
     */
    domainName?: string;
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * Indicates if the domain is a primary domain (Read-only).
     */
    isPrimary?: boolean;
    /**
     * Kind of resource this is.
     */
    kind?: string;
    /**
     * Indicates the verification state of a domain. (Read-only).
     */
    verified?: boolean;
}
