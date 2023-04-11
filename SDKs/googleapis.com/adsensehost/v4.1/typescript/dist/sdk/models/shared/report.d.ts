import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReportHeaders extends SpeakeasyBase {
    /**
     * The currency of this column. Only present if the header type is METRIC_CURRENCY.
     */
    currency?: string;
    /**
     * The name of the header.
     */
    name?: string;
    /**
     * The type of the header; one of DIMENSION, METRIC_TALLY, METRIC_RATIO, or METRIC_CURRENCY.
     */
    type?: string;
}
/**
 * Successful response
 */
export declare class Report extends SpeakeasyBase {
    /**
     * The averages of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.
     */
    averages?: string[];
    /**
     * The header information of the columns requested in the report. This is a list of headers; one for each dimension in the request, followed by one for each metric in the request.
     */
    headers?: ReportHeaders[];
    /**
     * Kind this is, in this case adsensehost#report.
     */
    kind?: string;
    /**
     * The output rows of the report. Each row is a list of cells; one for each dimension in the request, followed by one for each metric in the request. The dimension cells contain strings, and the metric cells contain numbers.
     */
    rows?: string[][];
    /**
     * The total number of rows matched by the report request. Fewer rows may be returned in the response due to being limited by the row count requested or the report row limit.
     */
    totalMatchedRows?: string;
    /**
     * The totals of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.
     */
    totals?: string[];
    /**
     * Any warnings associated with generation of the report.
     */
    warnings?: string[];
}
