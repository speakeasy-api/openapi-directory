import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1AdminReportsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1AdminReportsRequest extends SpeakeasyBase {
    accountId?: string;
    resolved?: boolean;
    targetAccountId?: string;
}
export declare class GetApiV1AdminReportsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adminReports?: shared.AdminReport[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
