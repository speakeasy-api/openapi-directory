import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CycleDeviceSwitchPortsRequestBody extends SpeakeasyBase {
    /**
     * List of switch ports. Example: [1, 2-5, 1_MA-MOD-8X10G_1, 1_MA-MOD-8X10G_2-1_MA-MOD-8X10G_8]
     */
    ports: string[];
}
export declare class CycleDeviceSwitchPortsRequest extends SpeakeasyBase {
    requestBody: CycleDeviceSwitchPortsRequestBody;
    serial: string;
}
export declare class CycleDeviceSwitchPortsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    cycleDeviceSwitchPorts200ApplicationJSONObject?: Record<string, any>;
}
