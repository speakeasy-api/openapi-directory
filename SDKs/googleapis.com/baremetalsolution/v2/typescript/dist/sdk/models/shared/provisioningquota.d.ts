import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceQuota } from "./instancequota";
/**
 * The asset type of this provisioning quota.
 */
export declare enum ProvisioningQuotaAssetTypeEnum {
    AssetTypeUnspecified = "ASSET_TYPE_UNSPECIFIED",
    AssetTypeServer = "ASSET_TYPE_SERVER",
    AssetTypeStorage = "ASSET_TYPE_STORAGE",
    AssetTypeNetwork = "ASSET_TYPE_NETWORK"
}
/**
 * A provisioning quota for a given project.
 */
export declare class ProvisioningQuota extends SpeakeasyBase {
    /**
     * The asset type of this provisioning quota.
     */
    assetType?: ProvisioningQuotaAssetTypeEnum;
    /**
     * The available count of the provisioning quota.
     */
    availableCount?: number;
    /**
     * The gcp service of the provisioning quota.
     */
    gcpService?: string;
    /**
     * A resource budget.
     */
    instanceQuota?: InstanceQuota;
    /**
     * The specific location of the provisioining quota.
     */
    location?: string;
    /**
     * Output only. The name of the provisioning quota.
     */
    name?: string;
    /**
     * Network bandwidth, Gbps
     */
    networkBandwidth?: string;
    /**
     * Server count.
     */
    serverCount?: string;
    /**
     * Storage size (GB).
     */
    storageGib?: string;
}
