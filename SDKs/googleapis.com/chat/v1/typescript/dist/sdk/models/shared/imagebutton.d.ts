import { SpeakeasyBase } from "../../../internal/utils";
import { OnClick } from "./onclick";
/**
 * The icon specified by an enum that indices to an icon provided by Chat API.
 */
export declare enum ImageButtonIconEnum {
    IconUnspecified = "ICON_UNSPECIFIED",
    Airplane = "AIRPLANE",
    Bookmark = "BOOKMARK",
    Bus = "BUS",
    Car = "CAR",
    Clock = "CLOCK",
    ConfirmationNumberIcon = "CONFIRMATION_NUMBER_ICON",
    Dollar = "DOLLAR",
    Description = "DESCRIPTION",
    Email = "EMAIL",
    EventPerformer = "EVENT_PERFORMER",
    EventSeat = "EVENT_SEAT",
    FlightArrival = "FLIGHT_ARRIVAL",
    FlightDeparture = "FLIGHT_DEPARTURE",
    Hotel = "HOTEL",
    HotelRoomType = "HOTEL_ROOM_TYPE",
    Invite = "INVITE",
    MapPin = "MAP_PIN",
    Membership = "MEMBERSHIP",
    MultiplePeople = "MULTIPLE_PEOPLE",
    Offer = "OFFER",
    Person = "PERSON",
    Phone = "PHONE",
    RestaurantIcon = "RESTAURANT_ICON",
    ShoppingCart = "SHOPPING_CART",
    Star = "STAR",
    Store = "STORE",
    Ticket = "TICKET",
    Train = "TRAIN",
    VideoCamera = "VIDEO_CAMERA",
    VideoPlay = "VIDEO_PLAY"
}
/**
 * An image button with an onclick action.
 */
export declare class ImageButton extends SpeakeasyBase {
    /**
     * The icon specified by an enum that indices to an icon provided by Chat API.
     */
    icon?: ImageButtonIconEnum;
    /**
     * The icon specified by a URL.
     */
    iconUrl?: string;
    /**
     * The name of this image_button which will be used for accessibility. Default value will be provided if developers don't specify.
     */
    name?: string;
    /**
     * An onclick action (e.g. open a link).
     */
    onClick?: OnClick;
}
