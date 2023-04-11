import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * [optional] The IKE version to be used for the IPsec VPN peer configuration. Defaults to '1' when omitted.
 */
export declare enum UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIkeVersionEnum {
    One = "1",
    Two = "2"
}
export declare enum UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum {
    Md5 = "md5",
    Sha1 = "sha1",
    Sha256 = "sha256"
}
export declare enum UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum {
    Aes128 = "aes128",
    Aes192 = "aes192",
    Aes256 = "aes256",
    Des = "des",
    Null = "null",
    Tripledes = "tripledes"
}
export declare enum UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum {
    Md5 = "md5",
    Sha1 = "sha1",
    Sha256 = "sha256"
}
export declare enum UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum {
    Aes128 = "aes128",
    Aes192 = "aes192",
    Aes256 = "aes256",
    Des = "des",
    Tripledes = "tripledes"
}
export declare enum UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum {
    Default = "default",
    Prfmd5 = "prfmd5",
    Prfsha1 = "prfsha1",
    Prfsha256 = "prfsha256"
}
/**
 * Custom IPSec policies for the VPN peer. If not included and a preset has not been chosen, the default preset for IPSec policies will be used.
 */
export declare class UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPolicies extends SpeakeasyBase {
    /**
     * This is the authentication algorithms to be used in Phase 2. The value should be an array with one of the following algorithms: 'sha256', 'sha1', 'md5'
     */
    childAuthAlgo?: UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum[];
    /**
     * This is the cipher algorithms to be used in Phase 2. The value should be an array with one or more of the following algorithms: 'aes256', 'aes192', 'aes128', 'tripledes', 'des', 'null'
     */
    childCipherAlgo?: UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum[];
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
    ikeAuthAlgo?: UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum[];
    /**
     * This is the cipher algorithm to be used in Phase 1. The value should be an array with one of the following algorithms: 'aes256', 'aes192', 'aes128', 'tripledes', 'des'
     */
    ikeCipherAlgo?: UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum[];
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
    ikePrfAlgo?: UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum[];
}
export declare class UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers extends SpeakeasyBase {
    /**
     * [optional] The IKE version to be used for the IPsec VPN peer configuration. Defaults to '1' when omitted.
     */
    ikeVersion?: UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIkeVersionEnum;
    /**
     * Custom IPSec policies for the VPN peer. If not included and a preset has not been chosen, the default preset for IPSec policies will be used.
     */
    ipsecPolicies?: UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPolicies;
    /**
     * One of the following available presets: 'default', 'aws', 'azure'. If this is provided, the 'ipsecPolicies' parameter is ignored.
     */
    ipsecPoliciesPreset?: string;
    /**
     * [optional] The local ID is used to identify the MX to the peer. This will apply to all MXs this peer applies to.
     */
    localId?: string;
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
     * [optional] The public IP of the VPN peer
     */
    publicIp?: string;
    /**
     * [optional] The remote ID is used to identify the connecting VPN peer. This can either be a valid IPv4 Address, FQDN or User FQDN.
     */
    remoteId?: string;
    /**
     * The shared secret with the VPN peer
     */
    secret: string;
}
export declare class UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBody extends SpeakeasyBase {
    /**
     * The list of VPN peers
     */
    peers: UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers[];
}
export declare class UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequest extends SpeakeasyBase {
    requestBody: UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBody;
    organizationId: string;
}
/**
 * [optional] The IKE version to be used for the IPsec VPN peer configuration. Defaults to '1' when omitted.
 */
export declare enum UpdateOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONPeersIkeVersionEnum {
    One = "1",
    Two = "2"
}
export declare enum UpdateOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONPeersIpsecPoliciesChildAuthAlgoEnum {
    Md5 = "md5",
    Sha1 = "sha1",
    Sha256 = "sha256"
}
export declare enum UpdateOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONPeersIpsecPoliciesChildCipherAlgoEnum {
    Aes128 = "aes128",
    Aes192 = "aes192",
    Aes256 = "aes256",
    Des = "des",
    Null = "null",
    Tripledes = "tripledes"
}
export declare enum UpdateOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONPeersIpsecPoliciesIkeAuthAlgoEnum {
    Md5 = "md5",
    Sha1 = "sha1",
    Sha256 = "sha256"
}
export declare enum UpdateOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONPeersIpsecPoliciesIkeCipherAlgoEnum {
    Aes128 = "aes128",
    Aes192 = "aes192",
    Aes256 = "aes256",
    Des = "des",
    Tripledes = "tripledes"
}
export declare enum UpdateOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONPeersIpsecPoliciesIkePrfAlgoEnum {
    Default = "default",
    Prfmd5 = "prfmd5",
    Prfsha1 = "prfsha1",
    Prfsha256 = "prfsha256"
}
/**
 * Custom IPSec policies for the VPN peer. If not included and a preset has not been chosen, the default preset for IPSec policies will be used.
 */
export declare class UpdateOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONPeersIpsecPolicies extends SpeakeasyBase {
    /**
     * This is the authentication algorithms to be used in Phase 2. The value should be an array with one of the following algorithms: 'sha256', 'sha1', 'md5'
     */
    childAuthAlgo?: UpdateOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONPeersIpsecPoliciesChildAuthAlgoEnum[];
    /**
     * This is the cipher algorithms to be used in Phase 2. The value should be an array with one or more of the following algorithms: 'aes256', 'aes192', 'aes128', 'tripledes', 'des', 'null'
     */
    childCipherAlgo?: UpdateOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONPeersIpsecPoliciesChildCipherAlgoEnum[];
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
    ikeAuthAlgo?: UpdateOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONPeersIpsecPoliciesIkeAuthAlgoEnum[];
    /**
     * This is the cipher algorithm to be used in Phase 1. The value should be an array with one of the following algorithms: 'aes256', 'aes192', 'aes128', 'tripledes', 'des'
     */
    ikeCipherAlgo?: UpdateOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONPeersIpsecPoliciesIkeCipherAlgoEnum[];
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
    ikePrfAlgo?: UpdateOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONPeersIpsecPoliciesIkePrfAlgoEnum[];
}
export declare class UpdateOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONPeers extends SpeakeasyBase {
    /**
     * [optional] The IKE version to be used for the IPsec VPN peer configuration. Defaults to '1' when omitted.
     */
    ikeVersion?: UpdateOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONPeersIkeVersionEnum;
    /**
     * Custom IPSec policies for the VPN peer. If not included and a preset has not been chosen, the default preset for IPSec policies will be used.
     */
    ipsecPolicies?: UpdateOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONPeersIpsecPolicies;
    /**
     * One of the following available presets: 'default', 'aws', 'azure'. If this is provided, the 'ipsecPolicies' parameter is ignored.
     */
    ipsecPoliciesPreset?: string;
    /**
     * [optional] The local ID is used to identify the MX to the peer. This will apply to all MXs this peer applies to.
     */
    localId?: string;
    /**
     * The name of the VPN peer
     */
    name?: string;
    /**
     * A list of network tags that will connect with this peer. Use ['all'] for all networks. Use ['none'] for no networks. If not included, the default is ['all'].
     */
    networkTags?: string[];
    /**
     * The list of the private subnets of the VPN peer
     */
    privateSubnets?: string[];
    /**
     * [optional] The public IP of the VPN peer
     */
    publicIp?: string;
    /**
     * [optional] The remote ID is used to identify the connecting VPN peer. This can either be a valid IPv4 Address, FQDN or User FQDN.
     */
    remoteId?: string;
    /**
     * The shared secret with the VPN peer
     */
    secret?: string;
}
/**
 * Successful operation
 */
export declare class UpdateOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSON extends SpeakeasyBase {
    /**
     * The list of VPN peers
     */
    peers?: UpdateOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONPeers[];
}
export declare class UpdateOrganizationApplianceVPNThirdPartyVPNPeersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONObject?: UpdateOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSON;
}
