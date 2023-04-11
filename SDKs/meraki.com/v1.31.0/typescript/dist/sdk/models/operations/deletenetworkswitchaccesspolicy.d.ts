import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworkSwitchAccessPolicyRequest extends SpeakeasyBase {
    accessPolicyNumber: string;
    networkId: string;
}
export declare class DeleteNetworkSwitchAccessPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
