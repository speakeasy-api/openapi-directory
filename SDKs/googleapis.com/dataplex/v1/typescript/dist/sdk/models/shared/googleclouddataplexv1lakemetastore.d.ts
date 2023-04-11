import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings to manage association of Dataproc Metastore with a lake.
 */
export declare class GoogleCloudDataplexV1LakeMetastore extends SpeakeasyBase {
    /**
     * Optional. A relative reference to the Dataproc Metastore (https://cloud.google.com/dataproc-metastore/docs) service associated with the lake: projects/{project_id}/locations/{location_id}/services/{service_id}
     */
    service?: string;
}
