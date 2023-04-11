import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OutputConfig contains a destination for writing trace data.
 */
export declare class OutputConfig extends SpeakeasyBase {
    /**
     * The destination for writing trace data. Supported formats include: "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]"
     */
    destination?: string;
}
