import { SpeakeasyBase } from "../../../internal/utils";
import { DomainAlias } from "./domainalias";
/**
 * Successful response
 */
export declare class DomainAliases extends SpeakeasyBase {
    /**
     * A list of domain alias objects.
     */
    domainAliases?: DomainAlias[];
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * Kind of resource this is.
     */
    kind?: string;
}
