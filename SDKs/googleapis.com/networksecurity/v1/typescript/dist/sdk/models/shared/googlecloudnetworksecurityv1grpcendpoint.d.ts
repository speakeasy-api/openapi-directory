import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specification of the GRPC Endpoint.
 */
export declare class GoogleCloudNetworksecurityV1GrpcEndpoint extends SpeakeasyBase {
    /**
     * Required. The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:".
     */
    targetUri?: string;
}
