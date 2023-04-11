import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GenerateQAReportResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * MissingParameter
     */
    error?: shared.ErrorT;
    /**
     * List of QA entries
     */
    qaWarnings?: shared.QaWarnings;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
