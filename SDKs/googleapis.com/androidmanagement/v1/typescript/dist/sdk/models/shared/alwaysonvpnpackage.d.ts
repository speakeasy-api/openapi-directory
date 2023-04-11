import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for an always-on VPN connection.
 */
export declare class AlwaysOnVpnPackage extends SpeakeasyBase {
    /**
     * Disallows networking when the VPN is not connected.
     */
    lockdownEnabled?: boolean;
    /**
     * The package name of the VPN app.
     */
    packageName?: string;
}
