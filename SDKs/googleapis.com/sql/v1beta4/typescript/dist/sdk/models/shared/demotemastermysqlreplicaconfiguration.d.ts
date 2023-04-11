import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Read-replica configuration specific to MySQL databases.
 */
export declare class DemoteMasterMySqlReplicaConfiguration extends SpeakeasyBase {
    /**
     * PEM representation of the trusted CA's x509 certificate.
     */
    caCertificate?: string;
    /**
     * PEM representation of the replica's x509 certificate.
     */
    clientCertificate?: string;
    /**
     * PEM representation of the replica's private key. The corresponsing public key is encoded in the client's certificate. The format of the replica's private key can be either PKCS #1 or PKCS #8.
     */
    clientKey?: string;
    /**
     * This is always `sql#demoteMasterMysqlReplicaConfiguration`.
     */
    kind?: string;
    /**
     * The password for the replication connection.
     */
    password?: string;
    /**
     * The username for the replication connection.
     */
    username?: string;
}
