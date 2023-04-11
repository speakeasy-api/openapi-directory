import { SpeakeasyBase } from "../../../internal/utils";
import { CriteriaTargeting } from "./criteriatargeting";
import { DayPartTargeting } from "./dayparttargeting";
import { InventorySizeTargeting } from "./inventorysizetargeting";
import { InventoryTypeTargeting } from "./inventorytypetargeting";
import { PlacementTargeting } from "./placementtargeting";
import { TechnologyTargeting } from "./technologytargeting";
import { VideoTargeting } from "./videotargeting";
/**
 * Targeting represents different criteria that can be used to target inventory. For example, they can choose to target inventory only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise.
 */
export declare class MarketplaceTargeting extends SpeakeasyBase {
    /**
     * Represents Daypart targeting.
     */
    daypartTargeting?: DayPartTargeting;
    /**
     * Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. This cannot be filtered using list filter syntax.
     */
    geoTargeting?: CriteriaTargeting;
    /**
     * Represents the size of an ad unit that can be targeted on a bid request.
     */
    inventorySizeTargeting?: InventorySizeTargeting;
    /**
     * Targeting of the inventory types a bid request can originate from.
     */
    inventoryTypeTargeting?: InventoryTypeTargeting;
    /**
     * Represents targeting about where the ads can appear, for example, certain sites or mobile applications. Different placement targeting types will be logically OR'ed.
     */
    placementTargeting?: PlacementTargeting;
    /**
     * Represents targeting about various types of technology.
     */
    technologyTargeting?: TechnologyTargeting;
    /**
     * Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. This cannot be filtered using list filter syntax.
     */
    userListTargeting?: CriteriaTargeting;
    /**
     * Represents targeting information about video.
     */
    videoTargeting?: VideoTargeting;
}
