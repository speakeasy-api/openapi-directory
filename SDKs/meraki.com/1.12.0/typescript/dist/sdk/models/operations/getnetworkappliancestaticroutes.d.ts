import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkApplianceStaticRoutesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceStaticRoutesRequest extends SpeakeasyBase {
    pathParams: GetNetworkApplianceStaticRoutesPathParams;
}
export declare class GetNetworkApplianceStaticRoutesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkApplianceStaticRoutes200ApplicationJSONObject?: Record<string, any>;
}
