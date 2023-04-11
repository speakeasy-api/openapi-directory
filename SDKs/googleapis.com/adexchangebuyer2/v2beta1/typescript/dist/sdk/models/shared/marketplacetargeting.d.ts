import { SpeakeasyBase } from "../../../internal/utils";
import { CriteriaTargeting } from "./criteriatargeting";
import { InventorySizeTargeting } from "./inventorysizetargeting";
import { PlacementTargeting } from "./placementtargeting";
import { TechnologyTargeting } from "./technologytargeting";
import { VideoTargeting } from "./videotargeting";
/**
 * Targeting represents different criteria that can be used by advertisers to target ad inventory. For example, they can choose to target ad requests only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise.
 */
export declare class MarketplaceTargeting extends SpeakeasyBase {
    /**
     * Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs.
     */
    geoTargeting?: CriteriaTargeting;
    /**
     * Represents the size of an ad unit that can be targeted on an ad request. It only applies to Private Auction, AdX Preferred Deals and Auction Packages. This targeting does not apply to Programmatic Guaranteed and Preferred Deals in Ad Manager.
     */
    inventorySizeTargeting?: InventorySizeTargeting;
    /**
     * Represents targeting about where the ads can appear, for example, certain sites or mobile applications. Different placement targeting types will be logically OR'ed.
     */
    placementTargeting?: PlacementTargeting;
    /**
     * Represents targeting about various types of technology.
     */
    technologyTargeting?: TechnologyTargeting;
    /**
     * Represents targeting information about video.
     */
    videoTargeting?: VideoTargeting;
}
