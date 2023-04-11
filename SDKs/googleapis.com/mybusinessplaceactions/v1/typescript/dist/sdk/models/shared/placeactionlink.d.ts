import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The type of place action that can be performed using this link.
 */
export declare enum PlaceActionLinkPlaceActionTypeEnum {
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
 * Represents a place action link and its attributes.
 */
export declare class PlaceActionLinkInput extends SpeakeasyBase {
    /**
     * Optional. Whether this link is preferred by the merchant. Only one link can be marked as preferred per place action type at a location. If a future request marks a different link as preferred for the same place action type, then the current preferred link (if any exists) will lose its preference.
     */
    isPreferred?: boolean;
    /**
     * Optional. The resource name, in the format `locations/{location_id}/placeActionLinks/{place_action_link_id}`. The name field will only be considered in UpdatePlaceActionLink and DeletePlaceActionLink requests for updating and deleting links respectively. However, it will be ignored in CreatePlaceActionLink request, where `place_action_link_id` will be assigned by the server on successful creation of a new link and returned as part of the response.
     */
    name?: string;
    /**
     * Required. The type of place action that can be performed using this link.
     */
    placeActionType?: PlaceActionLinkPlaceActionTypeEnum;
    /**
     * Required. The link uri. The same uri can be reused for different action types across different locations. However, only one place action link is allowed for each unique combination of (uri, place action type, location).
     */
    uri?: string;
}
/**
 * Output only. Specifies the provider type.
 */
export declare enum PlaceActionLinkProviderTypeEnum {
    ProviderTypeUnspecified = "PROVIDER_TYPE_UNSPECIFIED",
    Merchant = "MERCHANT",
    Aggregator3P = "AGGREGATOR_3P"
}
/**
 * Represents a place action link and its attributes.
 */
export declare class PlaceActionLink extends SpeakeasyBase {
    /**
     * Output only. The time when the place action link was created.
     */
    createTime?: string;
    /**
     * Output only. Indicates whether this link can be edited by the client.
     */
    isEditable?: boolean;
    /**
     * Optional. Whether this link is preferred by the merchant. Only one link can be marked as preferred per place action type at a location. If a future request marks a different link as preferred for the same place action type, then the current preferred link (if any exists) will lose its preference.
     */
    isPreferred?: boolean;
    /**
     * Optional. The resource name, in the format `locations/{location_id}/placeActionLinks/{place_action_link_id}`. The name field will only be considered in UpdatePlaceActionLink and DeletePlaceActionLink requests for updating and deleting links respectively. However, it will be ignored in CreatePlaceActionLink request, where `place_action_link_id` will be assigned by the server on successful creation of a new link and returned as part of the response.
     */
    name?: string;
    /**
     * Required. The type of place action that can be performed using this link.
     */
    placeActionType?: PlaceActionLinkPlaceActionTypeEnum;
    /**
     * Output only. Specifies the provider type.
     */
    providerType?: PlaceActionLinkProviderTypeEnum;
    /**
     * Output only. The time when the place action link was last modified.
     */
    updateTime?: string;
    /**
     * Required. The link uri. The same uri can be reused for different action types across different locations. However, only one place action link is allowed for each unique combination of (uri, place action type, location).
     */
    uri?: string;
}
