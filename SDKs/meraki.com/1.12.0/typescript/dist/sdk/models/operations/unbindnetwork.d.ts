import { SpeakeasyBase } from "../../../internal/utils";
export declare class UnbindNetworkPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class UnbindNetworkRequest extends SpeakeasyBase {
    pathParams: UnbindNetworkPathParams;
}
export declare class UnbindNetworkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    unbindNetwork200ApplicationJSONObject?: Record<string, any>;
}
