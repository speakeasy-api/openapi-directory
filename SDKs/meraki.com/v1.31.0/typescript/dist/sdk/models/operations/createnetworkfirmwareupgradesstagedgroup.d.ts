import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices extends SpeakeasyBase {
    /**
     * Name of the device
     */
    name?: string;
    /**
     * Serial of the device
     */
    serial: string;
}
export declare class CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks extends SpeakeasyBase {
    /**
     * ID of the Switch Stack
     */
    id: string;
    /**
     * Name of the Switch Stack
     */
    name?: string;
}
/**
 * The devices and Switch Stacks assigned to the Group
 */
export declare class CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices extends SpeakeasyBase {
    /**
     * Data Array of Devices containing the name and serial
     */
    devices?: CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices[];
    /**
     * Data Array of Switch Stacks containing the name and id
     */
    switchStacks?: CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks[];
}
export declare class CreateNetworkFirmwareUpgradesStagedGroupRequestBody extends SpeakeasyBase {
    /**
     * The devices and Switch Stacks assigned to the Group
     */
    assignedDevices?: CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices;
    /**
     * Description of the Staged Upgrade Group. Length must be 1 to 255 characters
     */
    description?: string;
    /**
     * Boolean indicating the default Group. Any device that does not have a group explicitly assigned will upgrade with this group
     */
    isDefault: boolean;
    /**
     * Name of the Staged Upgrade Group. Length must be 1 to 255 characters
     */
    name: string;
}
export declare class CreateNetworkFirmwareUpgradesStagedGroupRequest extends SpeakeasyBase {
    requestBody: CreateNetworkFirmwareUpgradesStagedGroupRequestBody;
    networkId: string;
}
export declare class CreateNetworkFirmwareUpgradesStagedGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject?: Record<string, any>;
}
