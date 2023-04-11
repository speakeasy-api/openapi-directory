import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Forward SSH Tunnel connectivity.
 */
export declare class ForwardSshTunnelConnectivity extends SpeakeasyBase {
    /**
     * Required. Hostname for the SSH tunnel.
     */
    hostname?: string;
    /**
     * Input only. SSH password.
     */
    password?: string;
    /**
     * Port for the SSH tunnel, default value is 22.
     */
    port?: number;
    /**
     * Input only. SSH private key.
     */
    privateKey?: string;
    /**
     * Required. Username for the SSH tunnel.
     */
    username?: string;
}
