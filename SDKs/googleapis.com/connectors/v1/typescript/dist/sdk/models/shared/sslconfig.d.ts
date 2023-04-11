import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigVariable } from "./configvariable";
import { Secret } from "./secret";
/**
 * Type of Client Cert (PEM/JKS/.. etc.)
 */
export declare enum SslConfigClientCertTypeEnum {
    CertTypeUnspecified = "CERT_TYPE_UNSPECIFIED",
    Pem = "PEM"
}
/**
 * Type of Server Cert (PEM/JKS/.. etc.)
 */
export declare enum SslConfigServerCertTypeEnum {
    CertTypeUnspecified = "CERT_TYPE_UNSPECIFIED",
    Pem = "PEM"
}
/**
 * Trust Model of the SSL connection
 */
export declare enum SslConfigTrustModelEnum {
    Public = "PUBLIC",
    Private = "PRIVATE",
    Insecure = "INSECURE"
}
/**
 * Controls the ssl type for the given connector version.
 */
export declare enum SslConfigTypeEnum {
    SslTypeUnspecified = "SSL_TYPE_UNSPECIFIED",
    Tls = "TLS",
    Mtls = "MTLS"
}
/**
 * SSL Configuration of a connection
 */
export declare class SslConfig extends SpeakeasyBase {
    /**
     * Additional SSL related field values
     */
    additionalVariables?: ConfigVariable[];
    /**
     * Type of Client Cert (PEM/JKS/.. etc.)
     */
    clientCertType?: SslConfigClientCertTypeEnum;
    /**
     * Secret provides a reference to entries in Secret Manager.
     */
    clientCertificate?: Secret;
    /**
     * Secret provides a reference to entries in Secret Manager.
     */
    clientPrivateKey?: Secret;
    /**
     * Secret provides a reference to entries in Secret Manager.
     */
    clientPrivateKeyPass?: Secret;
    /**
     * Secret provides a reference to entries in Secret Manager.
     */
    privateServerCertificate?: Secret;
    /**
     * Type of Server Cert (PEM/JKS/.. etc.)
     */
    serverCertType?: SslConfigServerCertTypeEnum;
    /**
     * Trust Model of the SSL connection
     */
    trustModel?: SslConfigTrustModelEnum;
    /**
     * Controls the ssl type for the given connector version.
     */
    type?: SslConfigTypeEnum;
    /**
     * Bool for enabling SSL
     */
    useSsl?: boolean;
}
