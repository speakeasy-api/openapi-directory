import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of the source.
 */
export declare enum GoogleCloudDatacatalogLineageV1OriginSourceTypeEnum {
    SourceTypeUnspecified = "SOURCE_TYPE_UNSPECIFIED",
    Custom = "CUSTOM",
    Bigquery = "BIGQUERY",
    DataFusion = "DATA_FUSION",
    Composer = "COMPOSER",
    LookerStudio = "LOOKER_STUDIO",
    Dataproc = "DATAPROC"
}
/**
 * Origin of a process.
 */
export declare class GoogleCloudDatacatalogLineageV1Origin extends SpeakeasyBase {
    /**
     * If the source_type isn't CUSTOM, the value of this field should be a Google Cloud resource name of the system, which reports lineage. The project and location parts of the resource name must match the project and location of the lineage resource being created. Examples: - `{source_type: COMPOSER, name: "projects/foo/locations/us/environments/bar"}` - `{source_type: BIGQUERY, name: "projects/foo/locations/eu"}` - `{source_type: CUSTOM, name: "myCustomIntegration"}`
     */
    name?: string;
    /**
     * Type of the source.
     */
    sourceType?: GoogleCloudDatacatalogLineageV1OriginSourceTypeEnum;
}
