import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSwitchStacksPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchStacksRequest extends SpeakeasyBase {
    pathParams: GetNetworkSwitchStacksPathParams;
}
export declare class GetNetworkSwitchStacksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSwitchStacks200ApplicationJSONObject?: Record<string, any>;
}
