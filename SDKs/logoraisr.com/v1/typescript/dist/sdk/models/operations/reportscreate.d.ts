import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReportsCreateResponse extends SpeakeasyBase {
    contentType: string;
    reportResponse?: shared.ReportResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
