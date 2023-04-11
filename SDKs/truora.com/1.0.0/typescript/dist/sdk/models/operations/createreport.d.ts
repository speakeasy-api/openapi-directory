import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateReportSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class CreateReportResponse extends SpeakeasyBase {
    contentType: string;
    reportOutput?: shared.ReportOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
