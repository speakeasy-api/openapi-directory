import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetScanResultsResponse extends SpeakeasyBase {
    contentType: string;
    example112s?: shared.Example112[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
