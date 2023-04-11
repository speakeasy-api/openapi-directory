import { SpeakeasyBase } from "../../../internal/utils";
import { DatabaseDump } from "./databasedump";
/**
 * A metastore resource that imports metadata.
 */
export declare class MetadataImportInput extends SpeakeasyBase {
    /**
     * A specification of the location of and metadata about a database dump from a relational database management system.
     */
    databaseDump?: DatabaseDump;
    /**
     * The description of the metadata import.
     */
    description?: string;
    /**
     * Immutable. The relative resource name of the metadata import, of the form:projects/{project_number}/locations/{location_id}/services/{service_id}/metadataImports/{metadata_import_id}.
     */
    name?: string;
}
/**
 * Output only. The current state of the metadata import.
 */
export declare enum MetadataImportStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Updating = "UPDATING",
    Failed = "FAILED"
}
/**
 * A metastore resource that imports metadata.
 */
export declare class MetadataImport extends SpeakeasyBase {
    /**
     * Output only. The time when the metadata import was started.
     */
    createTime?: string;
    /**
     * A specification of the location of and metadata about a database dump from a relational database management system.
     */
    databaseDump?: DatabaseDump;
    /**
     * The description of the metadata import.
     */
    description?: string;
    /**
     * Output only. The time when the metadata import finished.
     */
    endTime?: string;
    /**
     * Immutable. The relative resource name of the metadata import, of the form:projects/{project_number}/locations/{location_id}/services/{service_id}/metadataImports/{metadata_import_id}.
     */
    name?: string;
    /**
     * Output only. The current state of the metadata import.
     */
    state?: MetadataImportStateEnum;
    /**
     * Output only. The time when the metadata import was last updated.
     */
    updateTime?: string;
}
