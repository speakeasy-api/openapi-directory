import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request to inject credentials into a cluster.
 */
export declare class InjectCredentialsRequest extends SpeakeasyBase {
    /**
     * Required. The cluster UUID.
     */
    clusterUuid?: string;
    /**
     * Required. The encrypted credentials being injected in to the cluster.The client is responsible for encrypting the credentials in a way that is supported by the cluster.A wrapped value is used here so that the actual contents of the encrypted credentials are not written to audit logs.
     */
    credentialsCiphertext?: string;
}
