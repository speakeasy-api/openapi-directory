import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworkVlanRequest extends SpeakeasyBase {
    networkId: string;
    vlanId: string;
}
export declare class DeleteNetworkVlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
