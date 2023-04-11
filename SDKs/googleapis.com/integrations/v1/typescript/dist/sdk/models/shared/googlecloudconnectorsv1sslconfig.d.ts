import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudConnectorsV1ConfigVariable } from "./googlecloudconnectorsv1configvariable";
import { GoogleCloudConnectorsV1Secret } from "./googlecloudconnectorsv1secret";
/**
 * Type of Client Cert (PEM/JKS/.. etc.)
 */
export declare enum GoogleCloudConnectorsV1SslConfigClientCertTypeEnum {
    CertTypeUnspecified = "CERT_TYPE_UNSPECIFIED",
    Pem = "PEM"
}
/**
 * Type of Server Cert (PEM/JKS/.. etc.)
 */
export declare enum GoogleCloudConnectorsV1SslConfigServerCertTypeEnum {
    CertTypeUnspecified = "CERT_TYPE_UNSPECIFIED",
    Pem = "PEM"
}
/**
 * Trust Model of the SSL connection
 */
export declare enum GoogleCloudConnectorsV1SslConfigTrustModelEnum {
    Public = "PUBLIC",
    Private = "PRIVATE",
    Insecure = "INSECURE"
}
/**
 * Controls the ssl type for the given connector version.
 */
export declare enum GoogleCloudConnectorsV1SslConfigTypeEnum {
    SslTypeUnspecified = "SSL_TYPE_UNSPECIFIED",
    Tls = "TLS",
    Mtls = "MTLS"
}
/**
 * SSL Configuration of a connection
 */
export declare class GoogleCloudConnectorsV1SslConfig extends SpeakeasyBase {
    /**
     * Additional SSL related field values
     */
    additionalVariables?: GoogleCloudConnectorsV1ConfigVariable[];
    /**
     * Type of Client Cert (PEM/JKS/.. etc.)
     */
    clientCertType?: GoogleCloudConnectorsV1SslConfigClientCertTypeEnum;
    /**
     * Secret provides a reference to entries in Secret Manager.
     */
    clientCertificate?: GoogleCloudConnectorsV1Secret;
    /**
     * Secret provides a reference to entries in Secret Manager.
     */
    clientPrivateKey?: GoogleCloudConnectorsV1Secret;
    /**
     * Secret provides a reference to entries in Secret Manager.
     */
    clientPrivateKeyPass?: GoogleCloudConnectorsV1Secret;
    /**
     * Secret provides a reference to entries in Secret Manager.
     */
    privateServerCertificate?: GoogleCloudConnectorsV1Secret;
    /**
     * Type of Server Cert (PEM/JKS/.. etc.)
     */
    serverCertType?: GoogleCloudConnectorsV1SslConfigServerCertTypeEnum;
    /**
     * Trust Model of the SSL connection
     */
    trustModel?: GoogleCloudConnectorsV1SslConfigTrustModelEnum;
    /**
     * Controls the ssl type for the given connector version.
     */
    type?: GoogleCloudConnectorsV1SslConfigTypeEnum;
    /**
     * Bool for enabling SSL
     */
    useSsl?: boolean;
}
