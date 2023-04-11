import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1NetworkSetting } from "./googlechromepolicyversionsv1networksetting";
/**
 * Request object for creating a new network.
 */
export declare class GoogleChromePolicyVersionsV1DefineNetworkRequest extends SpeakeasyBase {
    /**
     * Required. Name of the new created network.
     */
    name?: string;
    /**
     * Required. Detailed network settings.
     */
    settings?: GoogleChromePolicyVersionsV1NetworkSetting[];
    /**
     * Required. The target resource on which this new network will be defined. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}")
     */
    targetResource?: string;
}
