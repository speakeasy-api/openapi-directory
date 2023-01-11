import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLanguagePairsReportRequest extends SpeakeasyBase {
    request?: shared.ReportFilter;
}
export declare class GetLanguagePairsReportResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    languagePairsReport?: shared.LanguagePairsReport;
    statusCode: number;
}
