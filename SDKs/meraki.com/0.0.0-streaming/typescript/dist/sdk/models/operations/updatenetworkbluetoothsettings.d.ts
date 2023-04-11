import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The way major and minor number should be assigned to nodes in the network. ('Unique', 'Non-unique')
 */
export declare enum UpdateNetworkBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum {
    NonUnique = "Non-unique",
    Unique = "Unique"
}
export declare class UpdateNetworkBluetoothSettingsRequestBody extends SpeakeasyBase {
    /**
     * Whether APs will advertise beacons.
     */
    advertisingEnabled?: boolean;
    /**
     * The major number to be used in the beacon identifier. Only valid in 'Non-unique' mode.
     */
    major?: number;
    /**
     * The way major and minor number should be assigned to nodes in the network. ('Unique', 'Non-unique')
     */
    majorMinorAssignmentMode?: UpdateNetworkBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum;
    /**
     * The minor number to be used in the beacon identifier. Only valid in 'Non-unique' mode.
     */
    minor?: number;
    /**
     * Whether APs will scan for Bluetooth enabled clients.
     */
    scanningEnabled?: boolean;
    /**
     * The UUID to be used in the beacon identifier.
     */
    uuid?: string;
}
export declare class UpdateNetworkBluetoothSettingsRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkBluetoothSettingsRequestBody;
    networkId: string;
}
/**
 * Successful operation
 */
export declare class UpdateNetworkBluetoothSettings200ApplicationJSON extends SpeakeasyBase {
    /**
     * Whether APs will advertise beacons.
     */
    advertisingEnabled?: boolean;
    /**
     * The major number to be used in the beacon identifier. Only valid in 'Non-unique' mode.
     */
    major?: number;
    /**
     * The way major and minor number should be assigned to nodes in the network. ('Unique', 'Non-unique')
     */
    majorMinorAssignmentMode?: string;
    /**
     * The minor number to be used in the beacon identifier. Only valid in 'Non-unique' mode.
     */
    minor?: number;
    /**
     * Whether APs will scan for Bluetooth enabled clients.
     */
    scanningEnabled?: boolean;
    /**
     * The UUID to be used in the beacon identifier.
     */
    uuid?: string;
}
export declare class UpdateNetworkBluetoothSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkBluetoothSettings200ApplicationJSONObject?: UpdateNetworkBluetoothSettings200ApplicationJSON;
}
