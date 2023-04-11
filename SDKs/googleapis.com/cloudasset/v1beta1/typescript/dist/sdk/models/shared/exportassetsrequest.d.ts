import { SpeakeasyBase } from "../../../internal/utils";
import { OutputConfig } from "./outputconfig";
/**
 * Asset content type. If not specified, no content but the asset name will be returned.
 */
export declare enum ExportAssetsRequestContentTypeEnum {
    ContentTypeUnspecified = "CONTENT_TYPE_UNSPECIFIED",
    Resource = "RESOURCE",
    IamPolicy = "IAM_POLICY"
}
/**
 * Export asset request.
 */
export declare class ExportAssetsRequest extends SpeakeasyBase {
    /**
     * A list of asset types of which to take a snapshot for. For example: "google.compute.Disk". If specified, only matching assets will be returned. See [Introduction to Cloud Asset Inventory](https://cloud.google.com/resource-manager/docs/cloud-asset-inventory/overview) for all supported asset types.
     */
    assetTypes?: string[];
    /**
     * Asset content type. If not specified, no content but the asset name will be returned.
     */
    contentType?: ExportAssetsRequestContentTypeEnum;
    /**
     * Output configuration for export assets destination.
     */
    outputConfig?: OutputConfig;
    /**
     * Timestamp to take an asset snapshot. This can only be set to a timestamp between 2018-10-02 UTC (inclusive) and the current time. If not specified, the current time will be used. Due to delays in resource data collection and indexing, there is a volatile window during which running the same query may get different results.
     */
    readTime?: string;
}
