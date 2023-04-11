import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a network port in a single container. This message is a subset of the [Kubernetes ContainerPort v1 core specification](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#containerport-v1-core).
 */
export declare class GoogleCloudMlV1ContainerPort extends SpeakeasyBase {
    /**
     * Number of the port to expose on the container. This must be a valid port number: 0 < PORT_NUMBER < 65536.
     */
    containerPort?: number;
}
