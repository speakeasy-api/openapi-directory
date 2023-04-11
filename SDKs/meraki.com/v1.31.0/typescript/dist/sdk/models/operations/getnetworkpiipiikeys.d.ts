import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkPiiPiiKeysRequest extends SpeakeasyBase {
    /**
     * The MAC of a Bluetooth client
     */
    bluetoothMac?: string;
    /**
     * The email of a network user account or a Systems Manager device
     */
    email?: string;
    /**
     * The IMEI of a Systems Manager device
     */
    imei?: string;
    /**
     * The MAC of a network client device or a Systems Manager device
     */
    mac?: string;
    networkId: string;
    /**
     * The serial of a Systems Manager device
     */
    serial?: string;
    /**
     * The username of a Systems Manager user
     */
    username?: string;
}
export declare class GetNetworkPiiPiiKeysResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkPiiPiiKeys200ApplicationJSONObject?: Record<string, any>;
}
