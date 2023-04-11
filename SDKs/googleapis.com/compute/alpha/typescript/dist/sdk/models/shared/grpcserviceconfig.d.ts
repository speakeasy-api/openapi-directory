import { SpeakeasyBase } from "../../../internal/utils";
import { CallCredentials } from "./callcredentials";
import { ChannelCredentials } from "./channelcredentials";
/**
 * [Deprecated] gRPC config to access the SDS server. gRPC config to access the SDS server.
 */
export declare class GrpcServiceConfig extends SpeakeasyBase {
    /**
     * [Deprecated] gRPC call credentials to access the SDS server. gRPC call credentials to access the SDS server.
     */
    callCredentials?: CallCredentials;
    /**
     * [Deprecated] gRPC channel credentials to access the SDS server. gRPC channel credentials to access the SDS server.
     */
    channelCredentials?: ChannelCredentials;
    /**
     * The target URI of the SDS server.
     */
    targetUri?: string;
}
