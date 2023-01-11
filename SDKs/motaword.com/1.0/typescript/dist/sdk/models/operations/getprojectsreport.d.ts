import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectsReportRequest extends SpeakeasyBase {
    request?: shared.ReportFilter;
}
export declare class GetProjectsReportResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    projectList?: shared.ProjectList;
    statusCode: number;
}
