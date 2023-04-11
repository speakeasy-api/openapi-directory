import { SpeakeasyBase } from "../../../internal/utils";
import { Button } from "./button";
import { OnClick } from "./onclick";
/**
 * An enum value that will be replaced by the Chat API with the corresponding icon image.
 */
export declare enum KeyValueIconEnum {
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
 * A UI element contains a key (label) and a value (content). And this element may also contain some actions such as onclick button.
 */
export declare class KeyValue extends SpeakeasyBase {
    /**
     * The text of the bottom label. Formatted text supported.
     */
    bottomLabel?: string;
    /**
     * A button. Can be a text button or an image button.
     */
    button?: Button;
    /**
     * The text of the content. Formatted text supported and always required.
     */
    content?: string;
    /**
     * If the content should be multiline.
     */
    contentMultiline?: boolean;
    /**
     * An enum value that will be replaced by the Chat API with the corresponding icon image.
     */
    icon?: KeyValueIconEnum;
    /**
     * The icon specified by a URL.
     */
    iconUrl?: string;
    /**
     * An onclick action (e.g. open a link).
     */
    onClick?: OnClick;
    /**
     * The text of the top label. Formatted text supported.
     */
    topLabel?: string;
}
