import { SpeakeasyBase } from "../../../internal/utils";
import { X509Extension } from "./x509extension";
/**
 * SubjectAltNames corresponds to a more modern way of listing what the asserted identity is in a certificate (i.e., compared to the "common name" in the distinguished name).
 */
export declare class SubjectAltNames extends SpeakeasyBase {
    /**
     * Contains additional subject alternative name values. For each custom_san, the `value` field must contain an ASN.1 encoded UTF8String.
     */
    customSans?: X509Extension[];
    /**
     * Contains only valid, fully-qualified host names.
     */
    dnsNames?: string[];
    /**
     * Contains only valid RFC 2822 E-mail addresses.
     */
    emailAddresses?: string[];
    /**
     * Contains only valid 32-bit IPv4 addresses or RFC 4291 IPv6 addresses.
     */
    ipAddresses?: string[];
    /**
     * Contains only valid RFC 3986 URIs.
     */
    uris?: string[];
}
