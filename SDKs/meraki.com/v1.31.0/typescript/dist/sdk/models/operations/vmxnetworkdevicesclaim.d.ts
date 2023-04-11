import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The size of the vMX you claim. It can be one of: small, medium, large, 100
 */
export declare enum VmxNetworkDevicesClaimRequestBodySizeEnum {
    OneHundred = "100",
    Large = "large",
    Medium = "medium",
    Small = "small"
}
export declare class VmxNetworkDevicesClaimRequestBody extends SpeakeasyBase {
    /**
     * The size of the vMX you claim. It can be one of: small, medium, large, 100
     */
    size: VmxNetworkDevicesClaimRequestBodySizeEnum;
}
export declare class VmxNetworkDevicesClaimRequest extends SpeakeasyBase {
    requestBody: VmxNetworkDevicesClaimRequestBody;
    networkId: string;
}
export declare class VmxNetworkDevicesClaimResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    vmxNetworkDevicesClaim200ApplicationJSONObject?: Record<string, any>;
}
