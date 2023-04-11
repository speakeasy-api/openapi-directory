import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The Staged Upgrade Group
 */
export declare class UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJsonGroup extends SpeakeasyBase {
    /**
     * ID of the Staged Upgrade Group
     */
    id: string;
}
export declare class UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJson extends SpeakeasyBase {
    /**
     * The Staged Upgrade Group
     */
    group?: UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJsonGroup;
}
export declare class UpdateNetworkFirmwareUpgradesStagedStagesRequestBody extends SpeakeasyBase {
    /**
     * Array of Staged Upgrade Groups
     */
    json?: UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJson[];
}
export declare class UpdateNetworkFirmwareUpgradesStagedStagesRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkFirmwareUpgradesStagedStagesRequestBody;
    networkId: string;
}
/**
 * The Staged Upgrade Group
 */
export declare class UpdateNetworkFirmwareUpgradesStagedStages200ApplicationJSONGroup extends SpeakeasyBase {
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
export declare class UpdateNetworkFirmwareUpgradesStagedStages200ApplicationJSON extends SpeakeasyBase {
    /**
     * The Staged Upgrade Group
     */
    group?: UpdateNetworkFirmwareUpgradesStagedStages200ApplicationJSONGroup;
}
export declare class UpdateNetworkFirmwareUpgradesStagedStagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkFirmwareUpgradesStagedStages200ApplicationJSONObjects?: UpdateNetworkFirmwareUpgradesStagedStages200ApplicationJSON[];
}
