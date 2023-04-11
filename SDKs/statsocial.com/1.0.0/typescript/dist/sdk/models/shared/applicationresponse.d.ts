import { SpeakeasyBase } from "../../../internal/utils";
import { ReportInfo } from "./reportinfo";
export declare class ApplicationResponse extends SpeakeasyBase {
    remainingCount?: number;
    reports?: ReportInfo;
    totalReportsCount?: number;
    totalReportsDone?: number;
}
