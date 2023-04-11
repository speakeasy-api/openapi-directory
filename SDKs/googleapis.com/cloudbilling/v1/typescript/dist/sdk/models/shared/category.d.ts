import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the category hierarchy of a SKU.
 */
export declare class Category extends SpeakeasyBase {
    /**
     * The type of product the SKU refers to. Example: "Compute", "Storage", "Network", "ApplicationServices" etc.
     */
    resourceFamily?: string;
    /**
     * A group classification for related SKUs. Example: "RAM", "GPU", "Prediction", "Ops", "GoogleEgress" etc.
     */
    resourceGroup?: string;
    /**
     * The display name of the service this SKU belongs to.
     */
    serviceDisplayName?: string;
    /**
     * Represents how the SKU is consumed. Example: "OnDemand", "Preemptible", "Commit1Mo", "Commit1Yr" etc.
     */
    usageType?: string;
}
