import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataCredentialsFromPlugin } from "./metadatacredentialsfromplugin";
/**
 * The type of call credentials to use for GRPC requests to the SDS server. This field can be set to one of the following: - GCE_VM: The local GCE VM service account credentials are used to access the SDS server. - FROM_PLUGIN: Custom authenticator credentials are used to access the SDS server.
 */
export declare enum CallCredentialsCallCredentialTypeEnum {
    FromPlugin = "FROM_PLUGIN",
    GceVm = "GCE_VM",
    Invalid = "INVALID"
}
/**
 * [Deprecated] gRPC call credentials to access the SDS server. gRPC call credentials to access the SDS server.
 */
export declare class CallCredentials extends SpeakeasyBase {
    /**
     * The type of call credentials to use for GRPC requests to the SDS server. This field can be set to one of the following: - GCE_VM: The local GCE VM service account credentials are used to access the SDS server. - FROM_PLUGIN: Custom authenticator credentials are used to access the SDS server.
     */
    callCredentialType?: CallCredentialsCallCredentialTypeEnum;
    /**
     * [Deprecated] Custom authenticator credentials. Custom authenticator credentials.
     */
    fromPlugin?: MetadataCredentialsFromPlugin;
}
