import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ContainerPort represents a network port in a single container.
 */
export declare class GoogleCloudRunV2ContainerPort extends SpeakeasyBase {
    /**
     * Port number the container listens on. This must be a valid TCP port number, 0 < container_port < 65536.
     */
    containerPort?: number;
    /**
     * If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".
     */
    name?: string;
}
