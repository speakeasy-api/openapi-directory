import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworkApplianceStaticRouteRequest extends SpeakeasyBase {
    networkId: string;
    staticRouteId: string;
}
export declare class DeleteNetworkApplianceStaticRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
