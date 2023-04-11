import { SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";
import { TimeWindow } from "./timewindow";
/**
 * State of prior_asset.
 */
export declare enum TemporalAssetPriorAssetStateEnum {
    PriorAssetStateUnspecified = "PRIOR_ASSET_STATE_UNSPECIFIED",
    Present = "PRESENT",
    Invalid = "INVALID",
    DoesNotExist = "DOES_NOT_EXIST",
    Deleted = "DELETED"
}
/**
 * An asset in Google Cloud and its temporal metadata, including the time window when it was observed and its status during that window.
 */
export declare class TemporalAsset extends SpeakeasyBase {
    /**
     * An asset in Google Cloud. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. IAM policy), or a relationship (e.g. an INSTANCE_TO_INSTANCEGROUP relationship). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information.
     */
    asset?: Asset;
    /**
     * Whether the asset has been deleted or not.
     */
    deleted?: boolean;
    /**
     * An asset in Google Cloud. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. IAM policy), or a relationship (e.g. an INSTANCE_TO_INSTANCEGROUP relationship). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information.
     */
    priorAsset?: Asset;
    /**
     * State of prior_asset.
     */
    priorAssetState?: TemporalAssetPriorAssetStateEnum;
    /**
     * A time window specified by its `start_time` and `end_time`.
     */
    window?: TimeWindow;
}
