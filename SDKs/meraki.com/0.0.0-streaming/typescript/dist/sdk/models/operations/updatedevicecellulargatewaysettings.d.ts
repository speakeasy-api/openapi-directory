import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateDeviceCellularGatewaySettingsRequestBodyFixedIpAssignments extends SpeakeasyBase {
    /**
     * The IP address you want to assign to a specific server or device
     */
    ip: string;
    /**
     * The MAC address of the server or device that hosts the internal resource that you wish to receive the specified IP address
     */
    mac: string;
    /**
     * A descriptive name of the assignment
     */
    name?: string;
}
export declare class UpdateDeviceCellularGatewaySettingsRequestBodyReservedIpRanges extends SpeakeasyBase {
    /**
     * Comment explaining the reserved IP range
     */
    comment: string;
    /**
     * Ending IP included in the reserved range of IPs
     */
    end: string;
    /**
     * Starting IP included in the reserved range of IPs
     */
    start: string;
}
export declare class UpdateDeviceCellularGatewaySettingsRequestBody extends SpeakeasyBase {
    /**
     * list of all fixed IP assignments for a single MG
     */
    fixedIpAssignments?: UpdateDeviceCellularGatewaySettingsRequestBodyFixedIpAssignments[];
    /**
     * list of all reserved IP ranges for a single MG
     */
    reservedIpRanges?: UpdateDeviceCellularGatewaySettingsRequestBodyReservedIpRanges[];
}
export declare class UpdateDeviceCellularGatewaySettingsRequest extends SpeakeasyBase {
    requestBody?: UpdateDeviceCellularGatewaySettingsRequestBody;
    serial: string;
}
export declare class UpdateDeviceCellularGatewaySettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateDeviceCellularGatewaySettings200ApplicationJSONObject?: Record<string, any>;
}
