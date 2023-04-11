import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkApplianceVlansSettingsRequestBody extends SpeakeasyBase {
    /**
     * Boolean indicating whether to enable (true) or disable (false) VLANs for the network
     */
    vlansEnabled?: boolean;
}
export declare class UpdateNetworkApplianceVlansSettingsRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkApplianceVlansSettingsRequestBody;
    networkId: string;
}
export declare class UpdateNetworkApplianceVlansSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkApplianceVlansSettings200ApplicationJSONObject?: Record<string, any>;
}
