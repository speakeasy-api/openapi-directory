import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListReportsRequest extends SpeakeasyBase {
    /**
     * Start value for pagination.
     */
    startKey?: string;
    /**
     * filter reports created by the specified username
     */
    username?: string;
}
export declare class ListReportsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Response containing list of reports
     */
    reportsOutput?: shared.ReportsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
