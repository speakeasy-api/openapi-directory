import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optional. The type of the database dump. If unspecified, defaults to MYSQL.
 */
export declare enum ExportMetadataRequestDatabaseDumpTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Mysql = "MYSQL",
    Avro = "AVRO"
}
/**
 * Request message for DataprocMetastore.ExportMetadata.
 */
export declare class ExportMetadataRequest extends SpeakeasyBase {
    /**
     * Optional. The type of the database dump. If unspecified, defaults to MYSQL.
     */
    databaseDumpType?: ExportMetadataRequestDatabaseDumpTypeEnum;
    /**
     * A Cloud Storage URI of a folder, in the format gs:///. A sub-folder containing exported files will be created below it.
     */
    destinationGcsFolder?: string;
    /**
     * Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format). A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.
     */
    requestId?: string;
}
