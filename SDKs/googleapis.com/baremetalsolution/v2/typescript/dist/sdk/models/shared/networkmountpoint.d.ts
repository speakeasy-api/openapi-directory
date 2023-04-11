import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Mount point for a network.
 */
export declare class NetworkMountPoint extends SpeakeasyBase {
    /**
     * Network should be a default gateway.
     */
    defaultGateway?: boolean;
    /**
     * Instance to attach network to.
     */
    instance?: string;
    /**
     * Ip address of the server.
     */
    ipAddress?: string;
    /**
     * Logical interface to detach from.
     */
    logicalInterface?: string;
}
