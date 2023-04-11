import { SpeakeasyBase } from "../../../internal/utils";
import { AllowedKeyType } from "./allowedkeytype";
import { CertificateExtensionConstraints } from "./certificateextensionconstraints";
import { CertificateIdentityConstraints } from "./certificateidentityconstraints";
import { IssuanceModes } from "./issuancemodes";
import { X509Parameters } from "./x509parameters";
/**
 * Defines controls over all certificate issuance within a CaPool.
 */
export declare class IssuancePolicy extends SpeakeasyBase {
    /**
     * IssuanceModes specifies the allowed ways in which Certificates may be requested from this CaPool.
     */
    allowedIssuanceModes?: IssuanceModes;
    /**
     * Optional. If any AllowedKeyType is specified, then the certificate request's public key must match one of the key types listed here. Otherwise, any key may be used.
     */
    allowedKeyTypes?: AllowedKeyType[];
    /**
     * An X509Parameters is used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions.
     */
    baselineValues?: X509Parameters;
    /**
     * Describes constraints on a Certificate's Subject and SubjectAltNames.
     */
    identityConstraints?: CertificateIdentityConstraints;
    /**
     * Optional. The maximum lifetime allowed for issued Certificates. Note that if the issuing CertificateAuthority expires before a Certificate's requested maximum_lifetime, the effective lifetime will be explicitly truncated to match it.
     */
    maximumLifetime?: string;
    /**
     * Describes a set of X.509 extensions that may be part of some certificate issuance controls.
     */
    passthroughExtensions?: CertificateExtensionConstraints;
}
