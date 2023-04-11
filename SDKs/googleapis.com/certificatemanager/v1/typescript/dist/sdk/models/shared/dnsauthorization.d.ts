import { SpeakeasyBase } from "../../../internal/utils";
import { DnsResourceRecord } from "./dnsresourcerecord";
/**
 * A DnsAuthorization resource describes a way to perform domain authorization for certificate issuance.
 */
export declare class DnsAuthorizationInput extends SpeakeasyBase {
    /**
     * One or more paragraphs of text description of a DnsAuthorization.
     */
    description?: string;
    /**
     * Required. Immutable. A domain that is being authorized. A DnsAuthorization resource covers a single domain and its wildcard, e.g. authorization for `example.com` can be used to issue certificates for `example.com` and `*.example.com`.
     */
    domain?: string;
    /**
     * Set of labels associated with a DnsAuthorization.
     */
    labels?: Record<string, string>;
    /**
     * A user-defined name of the dns authorization. DnsAuthorization names must be unique globally and match pattern `projects/* /locations/* /dnsAuthorizations/*`.
     */
    name?: string;
}
/**
 * A DnsAuthorization resource describes a way to perform domain authorization for certificate issuance.
 */
export declare class DnsAuthorization extends SpeakeasyBase {
    /**
     * Output only. The creation timestamp of a DnsAuthorization.
     */
    createTime?: string;
    /**
     * One or more paragraphs of text description of a DnsAuthorization.
     */
    description?: string;
    /**
     * The structure describing the DNS Resource Record that needs to be added to DNS configuration for the authorization to be usable by certificate.
     */
    dnsResourceRecord?: DnsResourceRecord;
    /**
     * Required. Immutable. A domain that is being authorized. A DnsAuthorization resource covers a single domain and its wildcard, e.g. authorization for `example.com` can be used to issue certificates for `example.com` and `*.example.com`.
     */
    domain?: string;
    /**
     * Set of labels associated with a DnsAuthorization.
     */
    labels?: Record<string, string>;
    /**
     * A user-defined name of the dns authorization. DnsAuthorization names must be unique globally and match pattern `projects/* /locations/* /dnsAuthorizations/*`.
     */
    name?: string;
    /**
     * Output only. The last update timestamp of a DnsAuthorization.
     */
    updateTime?: string;
}
