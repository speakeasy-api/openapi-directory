import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request object for removing a network
 */
export declare class GoogleChromePolicyVersionsV1RemoveNetworkRequest extends SpeakeasyBase {
    /**
     * Required. The GUID of the network to remove.
     */
    networkId?: string;
    /**
     * Required. The target resource on which this network will be removed. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}")
     */
    targetResource?: string;
}
