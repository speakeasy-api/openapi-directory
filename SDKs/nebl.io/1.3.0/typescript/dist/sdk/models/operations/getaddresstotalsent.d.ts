import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAddressTotalSentRequest extends SpeakeasyBase {
    /**
     * Address
     */
    address: string;
}
export declare class GetAddressTotalSentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Total sent by address
     */
    getAddressTotalSentResponse?: number;
}
