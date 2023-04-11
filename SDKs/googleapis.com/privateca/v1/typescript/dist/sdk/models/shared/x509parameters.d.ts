import { SpeakeasyBase } from "../../../internal/utils";
import { CaOptions } from "./caoptions";
import { KeyUsage } from "./keyusage";
import { NameConstraints } from "./nameconstraints";
import { ObjectId } from "./objectid";
import { X509Extension } from "./x509extension";
/**
 * An X509Parameters is used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions.
 */
export declare class X509Parameters extends SpeakeasyBase {
    /**
     * Optional. Describes custom X.509 extensions.
     */
    additionalExtensions?: X509Extension[];
    /**
     * Optional. Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate.
     */
    aiaOcspServers?: string[];
    /**
     * Describes values that are relevant in a CA certificate.
     */
    caOptions?: CaOptions;
    /**
     * A KeyUsage describes key usage values that may appear in an X.509 certificate.
     */
    keyUsage?: KeyUsage;
    /**
     * Describes the X.509 name constraints extension, per https://tools.ietf.org/html/rfc5280#section-4.2.1.10
     */
    nameConstraints?: NameConstraints;
    /**
     * Optional. Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.
     */
    policyIds?: ObjectId[];
}
