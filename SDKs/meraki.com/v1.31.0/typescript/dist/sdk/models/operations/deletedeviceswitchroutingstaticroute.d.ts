import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteDeviceSwitchRoutingStaticRouteRequest extends SpeakeasyBase {
    serial: string;
    staticRouteId: string;
}
export declare class DeleteDeviceSwitchRoutingStaticRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
