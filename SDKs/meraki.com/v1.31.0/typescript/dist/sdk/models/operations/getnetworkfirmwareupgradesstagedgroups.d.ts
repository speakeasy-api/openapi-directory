import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkFirmwareUpgradesStagedGroupsRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkFirmwareUpgradesStagedGroups200ApplicationJSONAssignedDevicesDevices extends SpeakeasyBase {
    /**
     * Name of the device
     */
    name?: string;
    /**
     * Serial of the device
     */
    serial?: string;
}
export declare class GetNetworkFirmwareUpgradesStagedGroups200ApplicationJSONAssignedDevicesSwitchStacks extends SpeakeasyBase {
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
export declare class GetNetworkFirmwareUpgradesStagedGroups200ApplicationJSONAssignedDevices extends SpeakeasyBase {
    /**
     * Data Array of Devices containing the name and serial
     */
    devices?: GetNetworkFirmwareUpgradesStagedGroups200ApplicationJSONAssignedDevicesDevices[];
    /**
     * Data Array of Switch Stacks containing the name and id
     */
    switchStacks?: GetNetworkFirmwareUpgradesStagedGroups200ApplicationJSONAssignedDevicesSwitchStacks[];
}
export declare class GetNetworkFirmwareUpgradesStagedGroups200ApplicationJSON extends SpeakeasyBase {
    /**
     * The devices and Switch Stacks assigned to the Group
     */
    assignedDevices?: GetNetworkFirmwareUpgradesStagedGroups200ApplicationJSONAssignedDevices;
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
export declare class GetNetworkFirmwareUpgradesStagedGroupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkFirmwareUpgradesStagedGroups200ApplicationJSONObjects?: GetNetworkFirmwareUpgradesStagedGroups200ApplicationJSON[];
}
