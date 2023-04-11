import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A network.
 */
export declare class NetworkAddress extends SpeakeasyBase {
    /**
     * IPv4 address to be assigned to the server.
     */
    address?: string;
    /**
     * Name of the existing network to use.
     */
    existingNetworkId?: string;
    /**
     * Id of the network to use, within the same ProvisioningConfig request.
     */
    networkId?: string;
}
