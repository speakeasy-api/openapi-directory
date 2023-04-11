import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkApplianceWarmSpareRequestBody extends SpeakeasyBase {
    /**
     * Enable warm spare
     */
    enabled: boolean;
    /**
     * Serial number of the warm spare appliance
     */
    spareSerial?: string;
    /**
     * Uplink mode, either virtual or public
     */
    uplinkMode?: string;
    /**
     * The WAN 1 shared IP
     */
    virtualIp1?: string;
    /**
     * The WAN 2 shared IP
     */
    virtualIp2?: string;
}
export declare class UpdateNetworkApplianceWarmSpareRequest extends SpeakeasyBase {
    requestBody: UpdateNetworkApplianceWarmSpareRequestBody;
    networkId: string;
}
export declare class UpdateNetworkApplianceWarmSpareResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkApplianceWarmSpare200ApplicationJSONObject?: Record<string, any>;
}
