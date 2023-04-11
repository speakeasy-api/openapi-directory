import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworkSwitchStackRoutingStaticRouteRequest extends SpeakeasyBase {
    networkId: string;
    staticRouteId: string;
    switchStackId: string;
}
export declare class DeleteNetworkSwitchStackRoutingStaticRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
