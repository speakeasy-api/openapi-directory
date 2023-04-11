import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const GetV05HeartbeatServerList: readonly ["https://dev.ndhm.gov.in/hiu"];
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
