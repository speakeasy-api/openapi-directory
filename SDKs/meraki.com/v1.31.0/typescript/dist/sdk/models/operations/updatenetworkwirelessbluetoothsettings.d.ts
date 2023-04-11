import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The way major and minor number should be assigned to nodes in the network. ('Unique', 'Non-unique')
 */
export declare enum UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum {
    NonUnique = "Non-unique",
    Unique = "Unique"
}
export declare class UpdateNetworkWirelessBluetoothSettingsRequestBody extends SpeakeasyBase {
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
    majorMinorAssignmentMode?: UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum;
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
export declare class UpdateNetworkWirelessBluetoothSettingsRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkWirelessBluetoothSettingsRequestBody;
    networkId: string;
}
/**
 * Successful operation
 */
export declare class UpdateNetworkWirelessBluetoothSettings200ApplicationJSON extends SpeakeasyBase {
    /**
     * Whether APs will advertise beacons.
     */
    advertisingEnabled?: boolean;
    /**
     * Whether ESL is enabled on this network.
     */
    eslEnabled?: boolean;
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
export declare class UpdateNetworkWirelessBluetoothSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkWirelessBluetoothSettings200ApplicationJSONObject?: UpdateNetworkWirelessBluetoothSettings200ApplicationJSON;
}
