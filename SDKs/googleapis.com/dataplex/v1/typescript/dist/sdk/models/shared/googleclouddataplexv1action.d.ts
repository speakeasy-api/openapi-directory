import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1ActionFailedSecurityPolicyApply } from "./googleclouddataplexv1actionfailedsecuritypolicyapply";
import { GoogleCloudDataplexV1ActionIncompatibleDataSchema } from "./googleclouddataplexv1actionincompatibledataschema";
import { GoogleCloudDataplexV1ActionInvalidDataFormat } from "./googleclouddataplexv1actioninvaliddataformat";
import { GoogleCloudDataplexV1ActionInvalidDataPartition } from "./googleclouddataplexv1actioninvaliddatapartition";
/**
 * The category of issue associated with the action.
 */
export declare enum GoogleCloudDataplexV1ActionCategoryEnum {
    CategoryUnspecified = "CATEGORY_UNSPECIFIED",
    ResourceManagement = "RESOURCE_MANAGEMENT",
    SecurityPolicy = "SECURITY_POLICY",
    DataDiscovery = "DATA_DISCOVERY"
}
/**
 * Action represents an issue requiring administrator action for resolution.
 */
export declare class GoogleCloudDataplexV1Action extends SpeakeasyBase {
    /**
     * Output only. The relative resource name of the asset, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}.
     */
    asset?: string;
    /**
     * The category of issue associated with the action.
     */
    category?: GoogleCloudDataplexV1ActionCategoryEnum;
    /**
     * The list of data locations associated with this action. Cloud Storage locations are represented as URI paths(E.g. gs://bucket/table1/year=2020/month=Jan/). BigQuery locations refer to resource names(E.g. bigquery.googleapis.com/projects/project-id/datasets/dataset-id).
     */
    dataLocations?: string[];
    /**
     * The time that the issue was detected.
     */
    detectTime?: string;
    /**
     * Failed to apply security policy to the managed resource(s) under a lake, zone or an asset. For a lake or zone resource, one or more underlying assets has a failure applying security policy to the associated managed resource.
     */
    failedSecurityPolicyApply?: GoogleCloudDataplexV1ActionFailedSecurityPolicyApply;
    /**
     * Action details for incompatible schemas detected by discovery.
     */
    incompatibleDataSchema?: GoogleCloudDataplexV1ActionIncompatibleDataSchema;
    /**
     * Action details for invalid or unsupported data files detected by discovery.
     */
    invalidDataFormat?: GoogleCloudDataplexV1ActionInvalidDataFormat;
    /**
     * Action details for invalid data arrangement.
     */
    invalidDataOrganization?: Record<string, any>;
    /**
     * Action details for invalid or unsupported partitions detected by discovery.
     */
    invalidDataPartition?: GoogleCloudDataplexV1ActionInvalidDataPartition;
    /**
     * Detailed description of the issue requiring action.
     */
    issue?: string;
    /**
     * Output only. The relative resource name of the lake, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}.
     */
    lake?: string;
    /**
     * Action details for absence of data detected by discovery.
     */
    missingData?: Record<string, any>;
    /**
     * Action details for resource references in assets that cannot be located.
     */
    missingResource?: Record<string, any>;
    /**
     * Output only. The relative resource name of the action, of the form: projects/{project}/locations/{location}/lakes/{lake}/actions/{action} projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/actions/{action} projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/assets/{asset}/actions/{action}.
     */
    name?: string;
    /**
     * Action details for unauthorized resource issues raised to indicate that the service account associated with the lake instance is not authorized to access or manage the resource associated with an asset.
     */
    unauthorizedResource?: Record<string, any>;
    /**
     * Output only. The relative resource name of the zone, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}.
     */
    zone?: string;
}
