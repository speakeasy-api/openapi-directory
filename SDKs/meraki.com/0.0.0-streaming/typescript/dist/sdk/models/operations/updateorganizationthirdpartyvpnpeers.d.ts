import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * [optional] The IKE version to be used for the IPsec VPN peer configuration. Defaults to '1' when omitted.
 */
export declare enum UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIkeVersionEnum {
    One = "1",
    Two = "2"
}
export declare enum UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum {
    Default = "default",
    Prfmd5 = "prfmd5",
    Prfsha1 = "prfsha1",
    Prfsha256 = "prfsha256"
}
/**
 * Custom IPSec policies for the VPN peer. If not included and a preset has not been chosen, the default preset for IPSec policies will be used.
 */
export declare class UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPolicies extends SpeakeasyBase {
    /**
     * This is the authentication algorithms to be used in Phase 2. The value should be an array with one of the following algorithms: 'sha256', 'sha1', 'md5'
     */
    childAuthAlgo?: string[];
    /**
     * This is the cipher algorithms to be used in Phase 2. The value should be an array with one or more of the following algorithms: 'aes256', 'aes192', 'aes128', 'tripledes', 'des', 'null'
     */
    childCipherAlgo?: string[];
    /**
     * The lifetime of the Phase 2 SA in seconds.
     */
    childLifetime?: number;
    /**
     * This is the Diffie-Hellman group to be used for Perfect Forward Secrecy in Phase 2. The value should be an array with one of the following values: 'disabled','group14', 'group5', 'group2', 'group1'
     */
    childPfsGroup?: string[];
    /**
     * This is the authentication algorithm to be used in Phase 1. The value should be an array with one of the following algorithms: 'sha256', 'sha1', 'md5'
     */
    ikeAuthAlgo?: string[];
    /**
     * This is the cipher algorithm to be used in Phase 1. The value should be an array with one of the following algorithms: 'aes256', 'aes192', 'aes128', 'tripledes', 'des'
     */
    ikeCipherAlgo?: string[];
    /**
     * This is the Diffie-Hellman group to be used in Phase 1. The value should be an array with one of the following algorithms: 'group14', 'group5', 'group2', 'group1'
     */
    ikeDiffieHellmanGroup?: string[];
    /**
     * The lifetime of the Phase 1 SA in seconds.
     */
    ikeLifetime?: number;
    /**
     * [optional] This is the pseudo-random function to be used in IKE_SA. The value should be an array with one of the following algorithms: 'prfsha256', 'prfsha1', 'prfmd5', 'default'. The 'default' option can be used to default to the Authentication algorithm.
     */
    ikePrfAlgo?: UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum[];
}
export declare class UpdateOrganizationThirdPartyVPNPeersRequestBodyPeers extends SpeakeasyBase {
    /**
     * [optional] The IKE version to be used for the IPsec VPN peer configuration. Defaults to '1' when omitted.
     */
    ikeVersion?: UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIkeVersionEnum;
    /**
     * Custom IPSec policies for the VPN peer. If not included and a preset has not been chosen, the default preset for IPSec policies will be used.
     */
    ipsecPolicies?: UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPolicies;
    /**
     * One of the following available presets: 'default', 'aws', 'azure'. If this is provided, the 'ipsecPolicies' parameter is ignored.
     */
    ipsecPoliciesPreset?: string;
    /**
     * The name of the VPN peer
     */
    name: string;
    /**
     * A list of network tags that will connect with this peer. Use ['all'] for all networks. Use ['none'] for no networks. If not included, the default is ['all'].
     */
    networkTags?: string[];
    /**
     * The list of the private subnets of the VPN peer
     */
    privateSubnets: string[];
    /**
     * The public IP of the VPN peer
     */
    publicIp: string;
    /**
     * [optional] The remote ID is used to identify the connecting VPN peer. This can either be a valid IPv4 Address, FQDN or User FQDN.
     */
    remoteId?: string;
    /**
     * The shared secret with the VPN peer
     */
    secret: string;
}
export declare class UpdateOrganizationThirdPartyVPNPeersRequestBody extends SpeakeasyBase {
    /**
     * The list of VPN peers
     */
    peers: UpdateOrganizationThirdPartyVPNPeersRequestBodyPeers[];
}
export declare class UpdateOrganizationThirdPartyVPNPeersRequest extends SpeakeasyBase {
    requestBody: UpdateOrganizationThirdPartyVPNPeersRequestBody;
    organizationId: string;
}
export declare class UpdateOrganizationThirdPartyVPNPeersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateOrganizationThirdPartyVPNPeers200ApplicationJSONObjects?: Record<string, any>[];
}
