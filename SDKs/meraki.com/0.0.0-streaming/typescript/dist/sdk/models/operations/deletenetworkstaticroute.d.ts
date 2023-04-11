import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworkStaticRouteRequest extends SpeakeasyBase {
    networkId: string;
    staticRouteId: string;
}
export declare class DeleteNetworkStaticRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
