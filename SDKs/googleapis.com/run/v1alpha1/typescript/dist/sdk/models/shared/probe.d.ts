import { SpeakeasyBase } from "../../../internal/utils";
import { ExecAction } from "./execaction";
import { GRPCAction } from "./grpcaction";
import { HTTPGetAction } from "./httpgetaction";
import { TCPSocketAction } from "./tcpsocketaction";
/**
 * Not supported by Cloud Run Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
 */
export declare class Probe extends SpeakeasyBase {
    /**
     * Not supported by Cloud Run ExecAction describes a "run in container" action.
     */
    exec?: ExecAction;
    /**
     * (Optional) Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
     */
    failureThreshold?: number;
    /**
     * Not supported by Cloud Run GRPCAction describes an action involving a GRPC port.
     */
    grpc?: GRPCAction;
    /**
     * Not supported by Cloud Run HTTPGetAction describes an action based on HTTP Get requests.
     */
    httpGet?: HTTPGetAction;
    /**
     * (Optional) Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
     */
    initialDelaySeconds?: number;
    /**
     * (Optional) How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeout_seconds.
     */
    periodSeconds?: number;
    /**
     * (Optional) Minimum consecutive successes for the probe to be considered successful after having failed. Must be 1 if set.
     */
    successThreshold?: number;
    /**
     * Not supported by Cloud Run TCPSocketAction describes an action based on opening a socket
     */
    tcpSocket?: TCPSocketAction;
    /**
     * (Optional) Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than period_seconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
     */
    timeoutSeconds?: number;
}
