import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteDeviceSwitchRoutingInterfaceRequest extends SpeakeasyBase {
    interfaceId: string;
    serial: string;
}
export declare class DeleteDeviceSwitchRoutingInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
