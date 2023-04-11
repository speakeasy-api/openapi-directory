import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The category that this location photo belongs to.
 */
export declare enum LocationAssociationCategoryEnum {
    CategoryUnspecified = "CATEGORY_UNSPECIFIED",
    Cover = "COVER",
    Profile = "PROFILE",
    Logo = "LOGO",
    Exterior = "EXTERIOR",
    Interior = "INTERIOR",
    Product = "PRODUCT",
    AtWork = "AT_WORK",
    FoodAndDrink = "FOOD_AND_DRINK",
    Menu = "MENU",
    CommonArea = "COMMON_AREA",
    Rooms = "ROOMS",
    Teams = "TEAMS",
    Additional = "ADDITIONAL"
}
/**
 * How the media item is associated with its location.
 */
export declare class LocationAssociation extends SpeakeasyBase {
    /**
     * The category that this location photo belongs to.
     */
    category?: LocationAssociationCategoryEnum;
    /**
     * The ID of a price list item that this location photo is associated with.
     */
    priceListItemId?: string;
}
