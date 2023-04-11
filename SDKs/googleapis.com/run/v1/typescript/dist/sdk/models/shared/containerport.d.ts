import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ContainerPort represents a network port in a single container.
 */
export declare class ContainerPort extends SpeakeasyBase {
    /**
     * Port number the container listens on. If present, this must be a valid port number, 0 < x < 65536. If not present, it will default to port 8080. For more information, see https://cloud.google.com/run/docs/container-contract#port
     */
    containerPort?: number;
    /**
     * If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".
     */
    name?: string;
    /**
     * Protocol for port. Must be "TCP". Defaults to "TCP".
     */
    protocol?: string;
}
