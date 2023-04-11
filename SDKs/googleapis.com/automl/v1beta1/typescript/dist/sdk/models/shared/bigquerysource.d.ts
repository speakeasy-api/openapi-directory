import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The BigQuery location for the input content.
 */
export declare class BigQuerySource extends SpeakeasyBase {
    /**
     * Required. BigQuery URI to a table, up to 2000 characters long. Accepted forms: * BigQuery path e.g. bq://projectId.bqDatasetId.bqTableId
     */
    inputUri?: string;
}
