import { SpeakeasyBase } from "../../../internal/utils";
import { AdSlot } from "./adslot";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { Pricing } from "./pricing";
/**
 * Type of inventory item.
 */
export declare enum InventoryItemTypeEnum {
    PlanningPlacementTypeRegular = "PLANNING_PLACEMENT_TYPE_REGULAR",
    PlanningPlacementTypeCredit = "PLANNING_PLACEMENT_TYPE_CREDIT"
}
/**
 * Represents a buy from the Planning inventory store.
 */
export declare class InventoryItem extends SpeakeasyBase {
    /**
     * Account ID of this inventory item.
     */
    accountId?: string;
    /**
     * Ad slots of this inventory item. If this inventory item represents a standalone placement, there will be exactly one ad slot. If this inventory item represents a placement group, there will be more than one ad slot, each representing one child placement in that placement group.
     */
    adSlots?: AdSlot[];
    /**
     * Advertiser ID of this inventory item.
     */
    advertiserId?: string;
    /**
     * Content category ID of this inventory item.
     */
    contentCategoryId?: string;
    /**
     * Estimated click-through rate of this inventory item.
     */
    estimatedClickThroughRate?: string;
    /**
     * Estimated conversion rate of this inventory item.
     */
    estimatedConversionRate?: string;
    /**
     * ID of this inventory item.
     */
    id?: string;
    /**
     * Whether this inventory item is in plan.
     */
    inPlan?: boolean;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#inventoryItem".
     */
    kind?: string;
    /**
     * Modification timestamp.
     */
    lastModifiedInfo?: LastModifiedInfo;
    /**
     * Name of this inventory item. For standalone inventory items, this is the same name as that of its only ad slot. For group inventory items, this can differ from the name of any of its ad slots.
     */
    name?: string;
    /**
     * Negotiation channel ID of this inventory item.
     */
    negotiationChannelId?: string;
    /**
     * Order ID of this inventory item.
     */
    orderId?: string;
    /**
     * Placement strategy ID of this inventory item.
     */
    placementStrategyId?: string;
    /**
     * Pricing Information
     */
    pricing?: Pricing;
    /**
     * Project ID of this inventory item.
     */
    projectId?: string;
    /**
     * RFP ID of this inventory item.
     */
    rfpId?: string;
    /**
     * ID of the site this inventory item is associated with.
     */
    siteId?: string;
    /**
     * Subaccount ID of this inventory item.
     */
    subaccountId?: string;
    /**
     * Type of inventory item.
     */
    type?: InventoryItemTypeEnum;
}
