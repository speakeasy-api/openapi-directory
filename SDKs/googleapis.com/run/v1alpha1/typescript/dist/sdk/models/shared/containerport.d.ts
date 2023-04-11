import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ContainerPort represents a network port in a single container.
 */
export declare class ContainerPort extends SpeakeasyBase {
    /**
     * (Optional) Port number the container listens on. This must be a valid port number, 0 < x < 65536.
     */
    containerPort?: number;
    /**
     * (Optional) If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".
     */
    name?: string;
    /**
     * (Optional) Protocol for port. Must be "TCP". Defaults to "TCP".
     */
    protocol?: string;
}
