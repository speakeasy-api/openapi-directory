import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnHeader } from "./columnheader";
import { ReportData } from "./reportdata";
/**
 * The data response corresponding to the request.
 */
export declare class Report extends SpeakeasyBase {
    /**
     * Column headers.
     */
    columnHeader?: ColumnHeader;
    /**
     * The data part of the report.
     */
    data?: ReportData;
    /**
     * Page token to retrieve the next page of results in the list.
     */
    nextPageToken?: string;
}
