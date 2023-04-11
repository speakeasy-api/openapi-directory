import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkFirmwareUpgradesStagedGroupRequest extends SpeakeasyBase {
    groupId: string;
    networkId: string;
}
export declare class GetNetworkFirmwareUpgradesStagedGroup200ApplicationJSONAssignedDevicesDevices extends SpeakeasyBase {
    /**
     * Name of the device
     */
    name?: string;
    /**
     * Serial of the device
     */
    serial?: string;
}
export declare class GetNetworkFirmwareUpgradesStagedGroup200ApplicationJSONAssignedDevicesSwitchStacks extends SpeakeasyBase {
    /**
     * ID of the Switch Stack
     */
    id?: string;
    /**
     * Name of the Switch Stack
     */
    name?: string;
}
/**
 * The devices and Switch Stacks assigned to the Group
 */
export declare class GetNetworkFirmwareUpgradesStagedGroup200ApplicationJSONAssignedDevices extends SpeakeasyBase {
    /**
     * Data Array of Devices containing the name and serial
     */
    devices?: GetNetworkFirmwareUpgradesStagedGroup200ApplicationJSONAssignedDevicesDevices[];
    /**
     * Data Array of Switch Stacks containing the name and id
     */
    switchStacks?: GetNetworkFirmwareUpgradesStagedGroup200ApplicationJSONAssignedDevicesSwitchStacks[];
}
/**
 * Successful operation
 */
export declare class GetNetworkFirmwareUpgradesStagedGroup200ApplicationJSON extends SpeakeasyBase {
    /**
     * The devices and Switch Stacks assigned to the Group
     */
    assignedDevices?: GetNetworkFirmwareUpgradesStagedGroup200ApplicationJSONAssignedDevices;
    /**
     * Description of the Staged Upgrade Group
     */
    description?: string;
    /**
     * Id of staged upgrade group
     */
    groupId?: string;
    /**
     * Boolean indicating the default Group. Any device that does not have a group explicitly assigned will upgrade with this group
     */
    isDefault?: boolean;
    /**
     * Name of the Staged Upgrade Group
     */
    name?: string;
}
export declare class GetNetworkFirmwareUpgradesStagedGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject?: GetNetworkFirmwareUpgradesStagedGroup200ApplicationJSON;
}
