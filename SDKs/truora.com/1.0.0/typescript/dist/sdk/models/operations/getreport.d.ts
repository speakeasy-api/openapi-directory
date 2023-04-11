import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetReportSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetReportRequest extends SpeakeasyBase {
    /**
     * The ID of the Report
     */
    reportId: string;
}
export declare class GetReportResponse extends SpeakeasyBase {
    contentType: string;
    reportOutput?: shared.ReportOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
