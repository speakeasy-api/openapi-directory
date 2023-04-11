import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworkApplianceVlanRequest extends SpeakeasyBase {
    networkId: string;
    vlanId: string;
}
export declare class DeleteNetworkApplianceVlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
