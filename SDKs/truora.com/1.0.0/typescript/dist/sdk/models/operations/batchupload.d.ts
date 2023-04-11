import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchUploadSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class BatchUploadRequest extends SpeakeasyBase {
    /**
     * The params required to batch upload
     */
    batchUploadInput: shared.BatchUploadInput;
    /**
     * The ID of the Report
     */
    reportId: string;
}
export declare class BatchUploadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error uploading the items
     */
    error?: shared.ErrorT;
    reportOutput?: shared.ReportOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
