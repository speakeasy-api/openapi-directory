import { SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { ResultTableColumnHeader } from "./resulttablecolumnheader";
/**
 * Response message for TargetedQueriesService.Query.
 */
export declare class QueryResponse extends SpeakeasyBase {
    /**
     * This value specifies information about the data returned in the `rows` fields. Each item in the `columnHeaders` list identifies a field returned in the `rows` value, which contains a list of comma-delimited data. The `columnHeaders` list will begin with the dimensions specified in the API request, which will be followed by the metrics specified in the API request. The order of both dimensions and metrics will match the ordering in the API request. For example, if the API request contains the parameters `dimensions=ageGroup,gender&metrics=viewerPercentage`, the API response will return columns in this order: `ageGroup`, `gender`, `viewerPercentage`.
     */
    columnHeaders?: ResultTableColumnHeader[];
    /**
     * Request Error information. The presence of an error field signals that the operation has failed.
     */
    errors?: Errors;
    /**
     * This value specifies the type of data included in the API response. For the query method, the kind property value will be `youtubeAnalytics#resultTable`.
     */
    kind?: string;
    /**
     * The list contains all rows of the result table. Each item in the list is an array that contains comma-delimited data corresponding to a single row of data. The order of the comma-delimited data fields will match the order of the columns listed in the `columnHeaders` field. If no data is available for the given query, the `rows` element will be omitted from the response. The response for a query with the `day` dimension will not contain rows for the most recent days.
     */
    rows?: any[][];
}
