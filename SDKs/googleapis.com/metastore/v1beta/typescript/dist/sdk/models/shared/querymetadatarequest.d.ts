import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for DataprocMetastore.QueryMetadata.
 */
export declare class QueryMetadataRequest extends SpeakeasyBase {
    /**
     * Required. A read-only SQL query to execute against the metadata database. The query cannot change or mutate the data.
     */
    query?: string;
}
