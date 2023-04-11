import { SpeakeasyBase } from "../../../internal/utils";
/**
 * TCPSocketAction describes an action based on opening a socket
 */
export declare class TCPSocketAction extends SpeakeasyBase {
    /**
     * Not supported by Cloud Run.
     */
    host?: string;
    /**
     * Port number to access on the container. Number must be in the range 1 to 65535.
     */
    port?: number;
}
