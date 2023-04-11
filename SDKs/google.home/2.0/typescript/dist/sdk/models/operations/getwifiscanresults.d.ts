import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWiFiScanResultsResponse extends SpeakeasyBase {
    contentType: string;
    example114s?: shared.Example114[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
