import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworkGroupPolicyRequest extends SpeakeasyBase {
    groupPolicyId: string;
    networkId: string;
}
export declare class DeleteNetworkGroupPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
