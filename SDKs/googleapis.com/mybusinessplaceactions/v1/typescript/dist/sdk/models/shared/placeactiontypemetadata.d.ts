import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The place action type.
 */
export declare enum PlaceActionTypeMetadataPlaceActionTypeEnum {
    PlaceActionTypeUnspecified = "PLACE_ACTION_TYPE_UNSPECIFIED",
    Appointment = "APPOINTMENT",
    OnlineAppointment = "ONLINE_APPOINTMENT",
    DiningReservation = "DINING_RESERVATION",
    FoodOrdering = "FOOD_ORDERING",
    FoodDelivery = "FOOD_DELIVERY",
    FoodTakeout = "FOOD_TAKEOUT",
    ShopOnline = "SHOP_ONLINE"
}
/**
 * Metadata for supported place action types.
 */
export declare class PlaceActionTypeMetadata extends SpeakeasyBase {
    /**
     * The localized display name for the attribute, if available; otherwise, the English display name.
     */
    displayName?: string;
    /**
     * The place action type.
     */
    placeActionType?: PlaceActionTypeMetadataPlaceActionTypeEnum;
}
