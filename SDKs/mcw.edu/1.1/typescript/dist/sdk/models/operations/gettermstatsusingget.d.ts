import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETTermStatsUsingGETRequest extends SpeakeasyBase {
    /**
     * accId
     */
    accId: string;
    /**
     * filterAccId
     */
    filterAccId: string;
}
export declare class GETTermStatsUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
