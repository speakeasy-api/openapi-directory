import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateExtensionConstraints } from "./certificateextensionconstraints";
import { CertificateIdentityConstraints } from "./certificateidentityconstraints";
import { X509Parameters } from "./x509parameters";
/**
 * A CertificateTemplate refers to a managed template for certificate issuance.
 */
export declare class CertificateTemplateInput extends SpeakeasyBase {
    /**
     * Optional. A human-readable description of scenarios this template is intended for.
     */
    description?: string;
    /**
     * Describes constraints on a Certificate's Subject and SubjectAltNames.
     */
    identityConstraints?: CertificateIdentityConstraints;
    /**
     * Optional. Labels with user-defined metadata.
     */
    labels?: Record<string, string>;
    /**
     * Describes a set of X.509 extensions that may be part of some certificate issuance controls.
     */
    passthroughExtensions?: CertificateExtensionConstraints;
    /**
     * An X509Parameters is used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions.
     */
    predefinedValues?: X509Parameters;
}
/**
 * A CertificateTemplate refers to a managed template for certificate issuance.
 */
export declare class CertificateTemplate extends SpeakeasyBase {
    /**
     * Output only. The time at which this CertificateTemplate was created.
     */
    createTime?: string;
    /**
     * Optional. A human-readable description of scenarios this template is intended for.
     */
    description?: string;
    /**
     * Describes constraints on a Certificate's Subject and SubjectAltNames.
     */
    identityConstraints?: CertificateIdentityConstraints;
    /**
     * Optional. Labels with user-defined metadata.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The resource name for this CertificateTemplate in the format `projects/* /locations/* /certificateTemplates/*`.
     */
    name?: string;
    /**
     * Describes a set of X.509 extensions that may be part of some certificate issuance controls.
     */
    passthroughExtensions?: CertificateExtensionConstraints;
    /**
     * An X509Parameters is used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions.
     */
    predefinedValues?: X509Parameters;
    /**
     * Output only. The time at which this CertificateTemplate was updated.
     */
    updateTime?: string;
}
