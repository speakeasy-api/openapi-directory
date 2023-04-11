import { SpeakeasyBase } from "../../../internal/utils";
/**
 * MySQL SSL configuration information.
 */
export declare class MysqlSslConfig extends SpeakeasyBase {
    /**
     * Input only. PEM-encoded certificate of the CA that signed the source database server's certificate.
     */
    caCertificate?: string;
    /**
     * Output only. Indicates whether the ca_certificate field is set.
     */
    caCertificateSet?: boolean;
    /**
     * Input only. PEM-encoded certificate that will be used by the replica to authenticate against the source database server. If this field is used then the 'client_key' and the 'ca_certificate' fields are mandatory.
     */
    clientCertificate?: string;
    /**
     * Output only. Indicates whether the client_certificate field is set.
     */
    clientCertificateSet?: boolean;
    /**
     * Input only. PEM-encoded private key associated with the Client Certificate. If this field is used then the 'client_certificate' and the 'ca_certificate' fields are mandatory.
     */
    clientKey?: string;
    /**
     * Output only. Indicates whether the client_key field is set.
     */
    clientKeySet?: boolean;
}
/**
 * MySQL SSL configuration information.
 */
export declare class MysqlSslConfigInput extends SpeakeasyBase {
    /**
     * Input only. PEM-encoded certificate of the CA that signed the source database server's certificate.
     */
    caCertificate?: string;
    /**
     * Input only. PEM-encoded certificate that will be used by the replica to authenticate against the source database server. If this field is used then the 'client_key' and the 'ca_certificate' fields are mandatory.
     */
    clientCertificate?: string;
    /**
     * Input only. PEM-encoded private key associated with the Client Certificate. If this field is used then the 'client_certificate' and the 'ca_certificate' fields are mandatory.
     */
    clientKey?: string;
}
