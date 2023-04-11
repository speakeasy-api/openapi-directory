import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetObservationsByCodeRequest extends SpeakeasyBase {
    /**
     * code
     */
    code: string;
    /**
     * userId
     */
    userId: number;
}
export declare class GetObservationsByCodeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
