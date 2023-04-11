import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SslCertificateManagedSslCertificateDomainStatusEnum {
    Active = "ACTIVE",
    DomainStatusUnspecified = "DOMAIN_STATUS_UNSPECIFIED",
    FailedCaaChecking = "FAILED_CAA_CHECKING",
    FailedCaaForbidden = "FAILED_CAA_FORBIDDEN",
    FailedNotVisible = "FAILED_NOT_VISIBLE",
    FailedRateLimited = "FAILED_RATE_LIMITED",
    Provisioning = "PROVISIONING"
}
/**
 * [Output only] Status of the managed certificate resource.
 */
export declare enum SslCertificateManagedSslCertificateStatusEnum {
    Active = "ACTIVE",
    ManagedCertificateStatusUnspecified = "MANAGED_CERTIFICATE_STATUS_UNSPECIFIED",
    Provisioning = "PROVISIONING",
    ProvisioningFailed = "PROVISIONING_FAILED",
    ProvisioningFailedPermanently = "PROVISIONING_FAILED_PERMANENTLY",
    RenewalFailed = "RENEWAL_FAILED"
}
/**
 * Configuration and status of a managed SSL certificate.
 */
export declare class SslCertificateManagedSslCertificate extends SpeakeasyBase {
    /**
     * [Output only] Detailed statuses of the domains specified for managed certificate resource.
     */
    domainStatus?: Record<string, SslCertificateManagedSslCertificateDomainStatusEnum>;
    /**
     * The domains for which a managed SSL certificate will be generated. Each Google-managed SSL certificate supports up to the [maximum number of domains per Google-managed SSL certificate](/load-balancing/docs/quotas#ssl_certificates).
     */
    domains?: string[];
    /**
     * [Output only] Status of the managed certificate resource.
     */
    status?: SslCertificateManagedSslCertificateStatusEnum;
}
