import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPatientEnteredObservationsByCodeRequest extends SpeakeasyBase {
    /**
     * code
     */
    code: string;
    /**
     * userId
     */
    userId: number;
}
export declare class GetPatientEnteredObservationsByCodeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
