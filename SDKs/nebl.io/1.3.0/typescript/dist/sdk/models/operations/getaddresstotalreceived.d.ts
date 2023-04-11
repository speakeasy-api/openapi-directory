import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAddressTotalReceivedRequest extends SpeakeasyBase {
    /**
     * Address
     */
    address: string;
}
export declare class GetAddressTotalReceivedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Total received by address
     */
    getAddressTotalReceivedResponse?: number;
}
