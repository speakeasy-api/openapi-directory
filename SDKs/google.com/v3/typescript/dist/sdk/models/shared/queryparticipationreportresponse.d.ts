import { SpeakeasyBase } from "../../../internal/utils";
import { ParticipationResult } from "./participationresult";
/**
 * Response message for ParticipationReportService.QueryParticipationReport.
 */
export declare class QueryParticipationReportResponse extends SpeakeasyBase {
    /**
     * Pagination token used to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The list of results that matches the query.
     */
    results?: ParticipationResult[];
}
