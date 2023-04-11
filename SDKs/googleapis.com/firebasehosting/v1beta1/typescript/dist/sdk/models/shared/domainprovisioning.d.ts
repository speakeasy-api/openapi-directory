import { SpeakeasyBase } from "../../../internal/utils";
import { CertDnsChallenge } from "./certdnschallenge";
import { CertHttpChallenge } from "./certhttpchallenge";
/**
 * The certificate provisioning status; updated when Firebase Hosting provisions an SSL certificate for the domain.
 */
export declare enum DomainProvisioningCertStatusEnum {
    CertStatusUnspecified = "CERT_STATUS_UNSPECIFIED",
    CertPending = "CERT_PENDING",
    CertMissing = "CERT_MISSING",
    CertProcessing = "CERT_PROCESSING",
    CertPropagating = "CERT_PROPAGATING",
    CertActive = "CERT_ACTIVE",
    CertError = "CERT_ERROR"
}
/**
 * The DNS record match status as of the last DNS fetch.
 */
export declare enum DomainProvisioningDnsStatusEnum {
    DnsStatusUnspecified = "DNS_STATUS_UNSPECIFIED",
    DnsPending = "DNS_PENDING",
    DnsMissing = "DNS_MISSING",
    DnsPartialMatch = "DNS_PARTIAL_MATCH",
    DnsMatch = "DNS_MATCH",
    DnsExtraneousMatch = "DNS_EXTRANEOUS_MATCH"
}
/**
 * The current certificate provisioning status information for a domain.
 */
export declare class DomainProvisioning extends SpeakeasyBase {
    /**
     * The TXT records (for the certificate challenge) that were found at the last DNS fetch.
     */
    certChallengeDiscoveredTxt?: string[];
    /**
     * Represents a DNS certificate challenge.
     */
    certChallengeDns?: CertDnsChallenge;
    /**
     * Represents an HTTP certificate challenge.
     */
    certChallengeHttp?: CertHttpChallenge;
    /**
     * The certificate provisioning status; updated when Firebase Hosting provisions an SSL certificate for the domain.
     */
    certStatus?: DomainProvisioningCertStatusEnum;
    /**
     * The IPs found at the last DNS fetch.
     */
    discoveredIps?: string[];
    /**
     * The time at which the last DNS fetch occurred.
     */
    dnsFetchTime?: string;
    /**
     * The DNS record match status as of the last DNS fetch.
     */
    dnsStatus?: DomainProvisioningDnsStatusEnum;
    /**
     * The list of IPs to which the domain is expected to resolve.
     */
    expectedIps?: string[];
}
