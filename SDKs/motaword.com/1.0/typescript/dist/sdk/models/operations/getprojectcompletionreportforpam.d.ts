import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProjectCompletionReportForPamRequest extends SpeakeasyBase {
    /**
     * Quote ID
     */
    projectId: number;
}
export declare class GetProjectCompletionReportForPamResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ProjectNotFound
     */
    error?: shared.ErrorT;
    /**
     * Project Completion Report
     */
    projectCompletionReport?: shared.ProjectCompletionReport;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
