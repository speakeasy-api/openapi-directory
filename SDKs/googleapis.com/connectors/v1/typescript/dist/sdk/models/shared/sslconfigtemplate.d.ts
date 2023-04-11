import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigVariableTemplate } from "./configvariabletemplate";
export declare enum SslConfigTemplateClientCertTypeEnum {
    CertTypeUnspecified = "CERT_TYPE_UNSPECIFIED",
    Pem = "PEM"
}
export declare enum SslConfigTemplateServerCertTypeEnum {
    CertTypeUnspecified = "CERT_TYPE_UNSPECIFIED",
    Pem = "PEM"
}
/**
 * Controls the ssl type for the given connector version
 */
export declare enum SslConfigTemplateSslTypeEnum {
    SslTypeUnspecified = "SSL_TYPE_UNSPECIFIED",
    Tls = "TLS",
    Mtls = "MTLS"
}
/**
 * Ssl config details of a connector version
 */
export declare class SslConfigTemplate extends SpeakeasyBase {
    /**
     * Any additional fields that need to be rendered
     */
    additionalVariables?: ConfigVariableTemplate[];
    /**
     * List of supported Client Cert Types
     */
    clientCertType?: SslConfigTemplateClientCertTypeEnum[];
    /**
     * Boolean for determining if the connector version mandates TLS.
     */
    isTlsMandatory?: boolean;
    /**
     * List of supported Server Cert Types
     */
    serverCertType?: SslConfigTemplateServerCertTypeEnum[];
    /**
     * Controls the ssl type for the given connector version
     */
    sslType?: SslConfigTemplateSslTypeEnum;
}
