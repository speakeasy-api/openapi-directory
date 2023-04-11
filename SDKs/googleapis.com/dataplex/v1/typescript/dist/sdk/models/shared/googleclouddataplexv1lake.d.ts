import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1AssetStatus } from "./googleclouddataplexv1assetstatus";
import { GoogleCloudDataplexV1LakeMetastore } from "./googleclouddataplexv1lakemetastore";
import { GoogleCloudDataplexV1LakeMetastoreStatus } from "./googleclouddataplexv1lakemetastorestatus";
/**
 * Output only. Current state of the lake.
 */
export declare enum GoogleCloudDataplexV1LakeStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleting = "DELETING",
    ActionRequired = "ACTION_REQUIRED"
}
/**
 * A lake is a centralized repository for managing enterprise data across the organization distributed across many cloud projects, and stored in a variety of storage services such as Google Cloud Storage and BigQuery. The resources attached to a lake are referred to as managed resources. Data within these managed resources can be structured or unstructured. A lake provides data admins with tools to organize, secure and manage their data at scale, and provides data scientists and data engineers an integrated experience to easily search, discover, analyze and transform data and associated metadata.
 */
export declare class GoogleCloudDataplexV1Lake extends SpeakeasyBase {
    /**
     * Aggregated status of the underlying assets of a lake or zone.
     */
    assetStatus?: GoogleCloudDataplexV1AssetStatus;
    /**
     * Output only. The time when the lake was created.
     */
    createTime?: string;
    /**
     * Optional. Description of the lake.
     */
    description?: string;
    /**
     * Optional. User friendly display name.
     */
    displayName?: string;
    /**
     * Optional. User-defined labels for the lake.
     */
    labels?: Record<string, string>;
    /**
     * Settings to manage association of Dataproc Metastore with a lake.
     */
    metastore?: GoogleCloudDataplexV1LakeMetastore;
    /**
     * Status of Lake and Dataproc Metastore service instance association.
     */
    metastoreStatus?: GoogleCloudDataplexV1LakeMetastoreStatus;
    /**
     * Output only. The relative resource name of the lake, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}.
     */
    name?: string;
    /**
     * Output only. Service account associated with this lake. This service account must be authorized to access or operate on resources managed by the lake.
     */
    serviceAccount?: string;
    /**
     * Output only. Current state of the lake.
     */
    state?: GoogleCloudDataplexV1LakeStateEnum;
    /**
     * Output only. System generated globally unique ID for the lake. This ID will be different if the lake is deleted and re-created with the same name.
     */
    uid?: string;
    /**
     * Output only. The time when the lake was last updated.
     */
    updateTime?: string;
}
/**
 * A lake is a centralized repository for managing enterprise data across the organization distributed across many cloud projects, and stored in a variety of storage services such as Google Cloud Storage and BigQuery. The resources attached to a lake are referred to as managed resources. Data within these managed resources can be structured or unstructured. A lake provides data admins with tools to organize, secure and manage their data at scale, and provides data scientists and data engineers an integrated experience to easily search, discover, analyze and transform data and associated metadata.
 */
export declare class GoogleCloudDataplexV1LakeInput extends SpeakeasyBase {
    /**
     * Aggregated status of the underlying assets of a lake or zone.
     */
    assetStatus?: GoogleCloudDataplexV1AssetStatus;
    /**
     * Optional. Description of the lake.
     */
    description?: string;
    /**
     * Optional. User friendly display name.
     */
    displayName?: string;
    /**
     * Optional. User-defined labels for the lake.
     */
    labels?: Record<string, string>;
    /**
     * Settings to manage association of Dataproc Metastore with a lake.
     */
    metastore?: GoogleCloudDataplexV1LakeMetastore;
    /**
     * Status of Lake and Dataproc Metastore service instance association.
     */
    metastoreStatus?: GoogleCloudDataplexV1LakeMetastoreStatus;
}
