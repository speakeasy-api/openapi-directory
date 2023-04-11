import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the backend metastore.
 */
export declare enum BackendMetastoreMetastoreTypeEnum {
    MetastoreTypeUnspecified = "METASTORE_TYPE_UNSPECIFIED",
    DataprocMetastore = "DATAPROC_METASTORE"
}
/**
 * Represents a backend metastore for the federation.
 */
export declare class BackendMetastore extends SpeakeasyBase {
    /**
     * The type of the backend metastore.
     */
    metastoreType?: BackendMetastoreMetastoreTypeEnum;
    /**
     * The relative resource name of the metastore that is being federated. The formats of the relative resource names for the currently supported metastores are listed below: BigQuery projects/{project_id} Dataproc Metastore projects/{project_id}/locations/{location}/services/{service_id}
     */
    name?: string;
}
