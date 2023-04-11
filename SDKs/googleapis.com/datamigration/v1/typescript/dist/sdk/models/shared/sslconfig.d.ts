import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The ssl config type according to 'client_key', 'client_certificate' and 'ca_certificate'.
 */
export declare enum SslConfigTypeEnum {
    SslTypeUnspecified = "SSL_TYPE_UNSPECIFIED",
    ServerOnly = "SERVER_ONLY",
    ServerClient = "SERVER_CLIENT"
}
/**
 * SSL configuration information.
 */
export declare class SslConfig extends SpeakeasyBase {
    /**
     * Required. Input only. The x509 PEM-encoded certificate of the CA that signed the source database server's certificate. The replica will use this certificate to verify it's connecting to the right host.
     */
    caCertificate?: string;
    /**
     * Input only. The x509 PEM-encoded certificate that will be used by the replica to authenticate against the source database server.If this field is used then the 'client_key' field is mandatory.
     */
    clientCertificate?: string;
    /**
     * Input only. The unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with the Client Certificate. If this field is used then the 'client_certificate' field is mandatory.
     */
    clientKey?: string;
    /**
     * Output only. The ssl config type according to 'client_key', 'client_certificate' and 'ca_certificate'.
     */
    type?: SslConfigTypeEnum;
}
/**
 * SSL configuration information.
 */
export declare class SslConfigInput extends SpeakeasyBase {
    /**
     * Required. Input only. The x509 PEM-encoded certificate of the CA that signed the source database server's certificate. The replica will use this certificate to verify it's connecting to the right host.
     */
    caCertificate?: string;
    /**
     * Input only. The x509 PEM-encoded certificate that will be used by the replica to authenticate against the source database server.If this field is used then the 'client_key' field is mandatory.
     */
    clientCertificate?: string;
    /**
     * Input only. The unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with the Client Certificate. If this field is used then the 'client_certificate' field is mandatory.
     */
    clientKey?: string;
}
