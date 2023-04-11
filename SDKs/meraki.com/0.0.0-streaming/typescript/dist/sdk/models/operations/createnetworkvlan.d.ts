import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateNetworkVlanRequestBody extends SpeakeasyBase {
    /**
     * The local IP of the appliance on the VLAN
     */
    applianceIp: string;
    /**
     * The id of the desired group policy to apply to the VLAN
     */
    groupPolicyId?: string;
    /**
     * The VLAN ID of the new VLAN (must be between 1 and 4094)
     */
    id: string;
    /**
     * The name of the new VLAN
     */
    name: string;
    /**
     * The subnet of the VLAN
     */
    subnet: string;
}
export declare class CreateNetworkVlanRequest extends SpeakeasyBase {
    requestBody: CreateNetworkVlanRequestBody;
    networkId: string;
}
export declare class CreateNetworkVlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createNetworkVlan201ApplicationJSONObject?: Record<string, any>;
}
