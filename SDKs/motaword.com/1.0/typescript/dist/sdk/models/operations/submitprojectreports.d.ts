import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SubmitProjectReportsRequest extends SpeakeasyBase {
    reportContent?: shared.ReportContent;
    /**
     * Project ID
     */
    id: number;
}
export declare class SubmitProjectReportsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * MissingMessage
     */
    error?: shared.ErrorT;
    /**
     * Report submitted successfully
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
