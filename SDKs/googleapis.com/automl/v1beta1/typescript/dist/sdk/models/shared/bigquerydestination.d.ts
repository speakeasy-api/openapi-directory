import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The BigQuery location for the output content.
 */
export declare class BigQueryDestination extends SpeakeasyBase {
    /**
     * Required. BigQuery URI to a project, up to 2000 characters long. Accepted forms: * BigQuery path e.g. bq://projectId
     */
    outputUri?: string;
}
