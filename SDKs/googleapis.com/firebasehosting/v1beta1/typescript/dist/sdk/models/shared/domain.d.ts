import { SpeakeasyBase } from "../../../internal/utils";
import { DomainProvisioning } from "./domainprovisioning";
import { DomainRedirect } from "./domainredirect";
/**
 * Output only. Additional status of the domain association.
 */
export declare enum DomainStatusEnum {
    DomainStatusUnspecified = "DOMAIN_STATUS_UNSPECIFIED",
    DomainChangePending = "DOMAIN_CHANGE_PENDING",
    DomainActive = "DOMAIN_ACTIVE",
    DomainVerificationRequired = "DOMAIN_VERIFICATION_REQUIRED",
    DomainVerificationLost = "DOMAIN_VERIFICATION_LOST"
}
/**
 * The intended behavior and status information of a domain.
 */
export declare class Domain extends SpeakeasyBase {
    /**
     * Required. The domain name of the association.
     */
    domainName?: string;
    /**
     * Defines the behavior of a domain-level redirect. Domain redirects preserve the path of the redirect but replace the requested domain with the one specified in the redirect configuration.
     */
    domainRedirect?: DomainRedirect;
    /**
     * The current certificate provisioning status information for a domain.
     */
    provisioning?: DomainProvisioning;
    /**
     * Required. The site name of the association.
     */
    site?: string;
    /**
     * Output only. Additional status of the domain association.
     */
    status?: DomainStatusEnum;
    /**
     * Output only. The time at which the domain was last updated.
     */
    updateTime?: string;
}
