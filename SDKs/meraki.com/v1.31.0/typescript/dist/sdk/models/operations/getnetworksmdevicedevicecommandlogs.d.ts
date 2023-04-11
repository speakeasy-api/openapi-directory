import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSmDeviceDeviceCommandLogsRequest extends SpeakeasyBase {
    deviceId: string;
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    endingBefore?: string;
    networkId: string;
    /**
     * The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
     */
    perPage?: number;
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    startingAfter?: string;
}
export declare class GetNetworkSmDeviceDeviceCommandLogs200ApplicationJSON extends SpeakeasyBase {
    /**
     * The type of command sent to the device.
     */
    action?: string;
    /**
     * The Meraki dashboard user who initiated the command.
     */
    dashboardUser?: string;
    /**
     * A JSON string object containing command details.
     */
    details?: string;
    /**
     * The name of the device to which the command is sent.
     */
    name?: string;
    /**
     * The time the command was sent to the device.
     */
    ts?: string;
}
export declare class GetNetworkSmDeviceDeviceCommandLogsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSmDeviceDeviceCommandLogs200ApplicationJSONObjects?: GetNetworkSmDeviceDeviceCommandLogs200ApplicationJSON[];
}
