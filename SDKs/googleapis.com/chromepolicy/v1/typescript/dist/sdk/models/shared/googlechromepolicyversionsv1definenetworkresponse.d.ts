import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1NetworkSetting } from "./googlechromepolicyversionsv1networksetting";
/**
 * Response object for creating a network.
 */
export declare class GoogleChromePolicyVersionsV1DefineNetworkResponse extends SpeakeasyBase {
    /**
     * Network ID of the new created network.
     */
    networkId?: string;
    /**
     * Detailed network settings of the new created network
     */
    settings?: GoogleChromePolicyVersionsV1NetworkSetting[];
    /**
     * The target resource on which this new network will be defined. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}")
     */
    targetResource?: string;
}
