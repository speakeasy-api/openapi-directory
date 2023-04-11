import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * The state of this domain as a `Registration` resource.
 */
export declare enum DomainResourceStateEnum {
    ResourceStateUnspecified = "RESOURCE_STATE_UNSPECIFIED",
    Importable = "IMPORTABLE",
    Unsupported = "UNSUPPORTED",
    Suspended = "SUSPENDED",
    Expired = "EXPIRED",
    Deleted = "DELETED"
}
/**
 * A domain that the calling user manages in Google Domains.
 */
export declare class Domain extends SpeakeasyBase {
    /**
     * The domain name. Unicode domain names are expressed in Punycode format.
     */
    domainName?: string;
    /**
     * The state of this domain as a `Registration` resource.
     */
    resourceState?: DomainResourceStateEnum;
    /**
     * Represents an amount of money with its currency type.
     */
    yearlyPrice?: Money;
}
