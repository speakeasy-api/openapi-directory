import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteLoadBalancersIdRequest extends SpeakeasyBase {
    /**
     * ID of the Load Balancer
     */
    id: number;
}
export declare class DeleteLoadBalancersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
