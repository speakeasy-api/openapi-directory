import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RegisterForRealtimeApiGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    registerRealtimeApiData?: shared.RegisterRealtimeApiData[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
