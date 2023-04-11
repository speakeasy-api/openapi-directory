import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Read-replica configuration specific to MySQL databases.
 */
export declare class MySqlReplicaConfiguration extends SpeakeasyBase {
    /**
     * PEM representation of the trusted CA's x509 certificate.
     */
    caCertificate?: string;
    /**
     * PEM representation of the replica's x509 certificate.
     */
    clientCertificate?: string;
    /**
     * PEM representation of the replica's private key. The corresponsing public key is encoded in the client's certificate.
     */
    clientKey?: string;
    /**
     * Seconds to wait between connect retries. MySQL's default is 60 seconds.
     */
    connectRetryInterval?: number;
    /**
     * Path to a SQL dump file in Google Cloud Storage from which the replica instance is to be created. The URI is in the form gs://bucketName/fileName. Compressed gzip files (.gz) are also supported. Dumps have the binlog co-ordinates from which replication begins. This can be accomplished by setting --master-data to 1 when using mysqldump.
     */
    dumpFilePath?: string;
    /**
     * This is always `sql#mysqlReplicaConfiguration`.
     */
    kind?: string;
    /**
     * Interval in milliseconds between replication heartbeats.
     */
    masterHeartbeatPeriod?: string;
    /**
     * The password for the replication connection.
     */
    password?: string;
    /**
     * A list of permissible ciphers to use for SSL encryption.
     */
    sslCipher?: string;
    /**
     * The username for the replication connection.
     */
    username?: string;
    /**
     * Whether or not to check the primary instance's Common Name value in the certificate that it sends during the SSL handshake.
     */
    verifyServerCertificate?: boolean;
}
