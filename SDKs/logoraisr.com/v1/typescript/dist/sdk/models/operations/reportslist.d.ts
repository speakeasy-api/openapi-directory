import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReportsListResponse extends SpeakeasyBase {
    contentType: string;
    report?: shared.Report;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
