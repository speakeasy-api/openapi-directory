import { SpeakeasyBase } from "../../../internal/utils";
/**
 * TCPSocketAction describes an action based on opening a socket
 */
export declare class GoogleCloudRunV2TCPSocketAction extends SpeakeasyBase {
    /**
     * Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.
     */
    port?: number;
}
