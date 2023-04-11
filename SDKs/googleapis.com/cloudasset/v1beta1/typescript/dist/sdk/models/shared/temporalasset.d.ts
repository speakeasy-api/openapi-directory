import { SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";
import { TimeWindow } from "./timewindow";
/**
 * An asset in Google Cloud and its temporal metadata, including the time window when it was observed and its status during that window.
 */
export declare class TemporalAsset extends SpeakeasyBase {
    /**
     * An asset in Google Cloud. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. IAM policy). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information.
     */
    asset?: Asset;
    /**
     * Whether the asset has been deleted or not.
     */
    deleted?: boolean;
    /**
     * A time window specified by its `start_time` and `end_time`.
     */
    window?: TimeWindow;
}
