import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetObservationsByCodesRequest extends SpeakeasyBase {
    /**
     * code
     */
    code: string[];
    /**
     * limit
     */
    limit: number;
    /**
     * offset
     */
    offset: number;
    /**
     * orderDirection
     */
    orderDirection: string;
    /**
     * userId
     */
    userId: number;
}
export declare class GetObservationsByCodesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
