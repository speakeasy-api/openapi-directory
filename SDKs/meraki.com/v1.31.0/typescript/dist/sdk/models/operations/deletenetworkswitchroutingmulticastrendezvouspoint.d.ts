import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest extends SpeakeasyBase {
    networkId: string;
    rendezvousPointId: string;
}
export declare class DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
