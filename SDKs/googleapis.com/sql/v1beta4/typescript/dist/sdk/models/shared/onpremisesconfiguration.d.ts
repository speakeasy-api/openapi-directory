import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceReference } from "./instancereference";
/**
 * On-premises instance configuration.
 */
export declare class OnPremisesConfiguration extends SpeakeasyBase {
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
     * The dump file to create the Cloud SQL replica.
     */
    dumpFilePath?: string;
    /**
     * The host and port of the on-premises instance in host:port format
     */
    hostPort?: string;
    /**
     * This is always `sql#onPremisesConfiguration`.
     */
    kind?: string;
    /**
     * The password for connecting to on-premises instance.
     */
    password?: string;
    /**
     * Reference to another Cloud SQL instance.
     */
    sourceInstance?: InstanceReference;
    /**
     * The username for connecting to on-premises instance.
     */
    username?: string;
}
