import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TestnetGetAddressTotalSentRequest extends SpeakeasyBase {
    /**
     * Address
     */
    address: string;
}
export declare class TestnetGetAddressTotalSentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Total sent by address
     */
    getAddressTotalSentResponse?: number;
}
