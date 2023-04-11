import { SpeakeasyBase } from "../../../internal/utils";
import { TlsCertificatePaths } from "./tlscertificatepaths";
/**
 * The channel credentials to access the SDS server. This field can be set to one of the following: CERTIFICATES: Use TLS certificates to access the SDS server. GCE_VM: Use local GCE VM credentials to access the SDS server.
 */
export declare enum ChannelCredentialsChannelCredentialTypeEnum {
    Certificates = "CERTIFICATES",
    GceVm = "GCE_VM",
    Invalid = "INVALID"
}
/**
 * [Deprecated] gRPC channel credentials to access the SDS server. gRPC channel credentials to access the SDS server.
 */
export declare class ChannelCredentials extends SpeakeasyBase {
    /**
     * [Deprecated] The paths to the mounted TLS Certificates and private key. The paths to the mounted TLS Certificates and private key.
     */
    certificates?: TlsCertificatePaths;
    /**
     * The channel credentials to access the SDS server. This field can be set to one of the following: CERTIFICATES: Use TLS certificates to access the SDS server. GCE_VM: Use local GCE VM credentials to access the SDS server.
     */
    channelCredentialType?: ChannelCredentialsChannelCredentialTypeEnum;
}
