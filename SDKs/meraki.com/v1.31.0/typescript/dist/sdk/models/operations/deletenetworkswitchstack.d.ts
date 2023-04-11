import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworkSwitchStackRequest extends SpeakeasyBase {
    networkId: string;
    switchStackId: string;
}
export declare class DeleteNetworkSwitchStackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
