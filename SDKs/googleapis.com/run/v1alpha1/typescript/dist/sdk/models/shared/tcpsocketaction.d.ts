import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Not supported by Cloud Run TCPSocketAction describes an action based on opening a socket
 */
export declare class TCPSocketAction extends SpeakeasyBase {
    /**
     * (Optional) Optional: Host name to connect to, defaults to the pod IP.
     */
    host?: string;
    /**
     * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. This field is currently limited to integer types only because of proto's inability to properly support the IntOrString golang type.
     */
    port?: number;
}
