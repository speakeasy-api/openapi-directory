import { SpeakeasyBase } from "../../../internal/utils";
/**
 * GRPCAction describes an action involving a GRPC port.
 */
export declare class GoogleCloudRunV2GRPCAction extends SpeakeasyBase {
    /**
     * Port number of the gRPC service. Number must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.
     */
    port?: number;
    /**
     * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.
     */
    service?: string;
}
