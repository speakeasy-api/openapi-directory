import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkFirmwareUpgradesStagedStagesRequest extends SpeakeasyBase {
    networkId: string;
}
/**
 * The Staged Upgrade Group
 */
export declare class GetNetworkFirmwareUpgradesStagedStages200ApplicationJSONGroup extends SpeakeasyBase {
    /**
     * Description of the Staged Upgrade Group
     */
    description?: string;
    /**
     * Id of the Staged Upgrade Group
     */
    id?: string;
    /**
     * Name of the Staged Upgrade Group
     */
    name?: string;
}
export declare class GetNetworkFirmwareUpgradesStagedStages200ApplicationJSON extends SpeakeasyBase {
    /**
     * The Staged Upgrade Group
     */
    group?: GetNetworkFirmwareUpgradesStagedStages200ApplicationJSONGroup;
}
export declare class GetNetworkFirmwareUpgradesStagedStagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkFirmwareUpgradesStagedStages200ApplicationJSONObjects?: GetNetworkFirmwareUpgradesStagedStages200ApplicationJSON[];
}
