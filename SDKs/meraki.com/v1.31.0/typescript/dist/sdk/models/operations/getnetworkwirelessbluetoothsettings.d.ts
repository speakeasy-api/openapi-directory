import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkWirelessBluetoothSettingsRequest extends SpeakeasyBase {
    networkId: string;
}
/**
 * Successful operation
 */
export declare class GetNetworkWirelessBluetoothSettings200ApplicationJSON extends SpeakeasyBase {
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
export declare class GetNetworkWirelessBluetoothSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkWirelessBluetoothSettings200ApplicationJSONObject?: GetNetworkWirelessBluetoothSettings200ApplicationJSON;
}
