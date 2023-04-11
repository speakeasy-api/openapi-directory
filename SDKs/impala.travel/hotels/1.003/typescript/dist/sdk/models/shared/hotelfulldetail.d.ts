import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Amenity } from "./amenity";
import { ExternalUrl } from "./externalurl";
import { Image } from "./image";
import { Location } from "./location";
import { RoomType } from "./roomtype";
import { TimeRange } from "./timerange";
export declare class HotelFullDetailDescription extends SpeakeasyBase {
    /**
     * A short description that helps highlight what's special about this hotel.
     */
    short?: string;
}
/**
 * Full details on a hotel, including its room types and available rates
 */
export declare class HotelFullDetail extends SpeakeasyBase {
    /**
     * Physical address
     */
    address: Address;
    amenities: Amenity[];
    /**
     * A time range. Open-ended time ranges are indicated by omitting either `start` or `end` in the object.
     */
    checkIn: TimeRange;
    /**
     * A time range. Open-ended time ranges are indicated by omitting either `start` or `end` in the object.
     */
    checkOut: TimeRange;
    /**
     * This determines if you can negotiate directly with the hotel.
     */
    contractable: boolean;
    /**
     * Date and time (in UTC and ISO 8601 format) when the hotel's stable content (i.e. all the details of the hotel excluding its rates) was created.
     */
    createdAt?: Date;
    /**
     * The standard currency code used by the hotel.
     */
    currency: string;
    description?: HotelFullDetailDescription;
    emails: string[];
    externalUrls: ExternalUrl[];
    /**
     * Unique identifier for this hotel within the Impala platform.
     */
    hotelId: string;
    /**
     * Photos of the hotel, sorted in the recommended display order (e.g. for photo galleries) starting with the recommended hero image.
     */
    images: Image[];
    /**
     * Precise location on a map (using WGS 84 longitude and latitude notation)
     */
    location: Location;
    /**
     * Name of the hotel.
     */
    name: string;
    /**
     * The hotel's phone number(s)
     */
    phoneNumbers: string[];
    /**
     * The number of rooms at the hotel.
     */
    roomCount: number;
    /**
     * List of room types available at this hotel.
     */
    roomTypes: RoomType[];
    /**
     * The star rating (or star-equivalent rating)
     */
    starRating: number;
    /**
     * Rules and terms that apply to this hotel and have to be shown to your guest before the make their booking.
     */
    termsAndConditions: string;
    /**
     * The timezone the hotel is in - e.g AST
     */
    timezone?: string;
    /**
     * Date and time (in UTC and ISO 8601 format) when the hotel's stable content (i.e. all the details of the hotel excluding its rates)  was last updated.
     */
    updatedAt?: Date;
    /**
     * The URL to the hotel's website.
     */
    websiteUrl: string;
}
