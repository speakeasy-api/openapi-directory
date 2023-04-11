import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const GetV05HeartbeatServerList: readonly ["https://your-hrp-server.com"];
export declare class GetV05HeartbeatResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    heartbeatResponse?: shared.HeartbeatResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
