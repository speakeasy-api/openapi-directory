import { SpeakeasyBase } from "../../../internal/utils";
export declare class NetworkConnection extends SpeakeasyBase {
    /**
     * Local IP address.
     */
    localIpAddress?: string;
    /**
     * Local port.
     */
    localPort?: number;
    /**
     * Process ID.
     */
    pid?: string;
    /**
     * Process or service name.
     */
    processName?: string;
    /**
     * Connection protocol (e.g. TCP/UDP).
     */
    protocol?: string;
    /**
     * Remote IP address.
     */
    remoteIpAddress?: string;
    /**
     * Remote port.
     */
    remotePort?: number;
    /**
     * Connection state (e.g. CONNECTED).
     */
    state?: string;
}
