import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetBasicPatientDetailsRequest extends SpeakeasyBase {
    /**
     * userId
     */
    userId: number;
}
export declare class GetBasicPatientDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
