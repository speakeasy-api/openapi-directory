import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersReportRequest extends SpeakeasyBase {
    request?: shared.ReportFilter;
}
export declare class GetUsersReportResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    usersReport?: shared.UsersReport;
}
