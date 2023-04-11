import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1AssetDiscoverySpec } from "./googleclouddataplexv1assetdiscoveryspec";
import { GoogleCloudDataplexV1AssetDiscoveryStatus } from "./googleclouddataplexv1assetdiscoverystatus";
import { GoogleCloudDataplexV1AssetResourceSpec } from "./googleclouddataplexv1assetresourcespec";
import { GoogleCloudDataplexV1AssetResourceStatus, GoogleCloudDataplexV1AssetResourceStatusInput } from "./googleclouddataplexv1assetresourcestatus";
import { GoogleCloudDataplexV1AssetSecurityStatus } from "./googleclouddataplexv1assetsecuritystatus";
/**
 * An asset represents a cloud resource that is being managed within a lake as a member of a zone.
 */
export declare class GoogleCloudDataplexV1AssetInput extends SpeakeasyBase {
    /**
     * Optional. Description of the asset.
     */
    description?: string;
    /**
     * Settings to manage the metadata discovery and publishing for an asset.
     */
    discoverySpec?: GoogleCloudDataplexV1AssetDiscoverySpec;
    /**
     * Status of discovery for an asset.
     */
    discoveryStatus?: GoogleCloudDataplexV1AssetDiscoveryStatus;
    /**
     * Optional. User friendly display name.
     */
    displayName?: string;
    /**
     * Optional. User defined labels for the asset.
     */
    labels?: Record<string, string>;
    /**
     * Identifies the cloud resource that is referenced by this asset.
     */
    resourceSpec?: GoogleCloudDataplexV1AssetResourceSpec;
    /**
     * Status of the resource referenced by an asset.
     */
    resourceStatus?: GoogleCloudDataplexV1AssetResourceStatusInput;
    /**
     * Security policy status of the asset. Data security policy, i.e., readers, writers & owners, should be specified in the lake/zone/asset IAM policy.
     */
    securityStatus?: GoogleCloudDataplexV1AssetSecurityStatus;
}
/**
 * Output only. Current state of the asset.
 */
export declare enum GoogleCloudDataplexV1AssetStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleting = "DELETING",
    ActionRequired = "ACTION_REQUIRED"
}
/**
 * An asset represents a cloud resource that is being managed within a lake as a member of a zone.
 */
export declare class GoogleCloudDataplexV1Asset extends SpeakeasyBase {
    /**
     * Output only. The time when the asset was created.
     */
    createTime?: string;
    /**
     * Optional. Description of the asset.
     */
    description?: string;
    /**
     * Settings to manage the metadata discovery and publishing for an asset.
     */
    discoverySpec?: GoogleCloudDataplexV1AssetDiscoverySpec;
    /**
     * Status of discovery for an asset.
     */
    discoveryStatus?: GoogleCloudDataplexV1AssetDiscoveryStatus;
    /**
     * Optional. User friendly display name.
     */
    displayName?: string;
    /**
     * Optional. User defined labels for the asset.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The relative resource name of the asset, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}.
     */
    name?: string;
    /**
     * Identifies the cloud resource that is referenced by this asset.
     */
    resourceSpec?: GoogleCloudDataplexV1AssetResourceSpec;
    /**
     * Status of the resource referenced by an asset.
     */
    resourceStatus?: GoogleCloudDataplexV1AssetResourceStatus;
    /**
     * Security policy status of the asset. Data security policy, i.e., readers, writers & owners, should be specified in the lake/zone/asset IAM policy.
     */
    securityStatus?: GoogleCloudDataplexV1AssetSecurityStatus;
    /**
     * Output only. Current state of the asset.
     */
    state?: GoogleCloudDataplexV1AssetStateEnum;
    /**
     * Output only. System generated globally unique ID for the asset. This ID will be different if the asset is deleted and re-created with the same name.
     */
    uid?: string;
    /**
     * Output only. The time when the asset was last updated.
     */
    updateTime?: string;
}
