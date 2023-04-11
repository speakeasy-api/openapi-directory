import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Image } from "./image";
import { Location } from "./location";
import { TimeRange } from "./timerange";
/**
 * Essential information on a hotel returned as part of other resources, linking to the full resource within its `href` field.
 */
export declare class HotelStub extends SpeakeasyBase {
    /**
     * Physical address
     */
    address: Address;
    /**
     * A time range. Open-ended time ranges are indicated by omitting either `start` or `end` in the object.
     */
    checkIn?: TimeRange;
    /**
     * A time range. Open-ended time ranges are indicated by omitting either `start` or `end` in the object.
     */
    checkOut?: TimeRange;
    emails?: string[];
    /**
     * Unique identifier for this hotel within the Impala platform.
     */
    hotelId: string;
    /**
     * URI that allows access to the full hotel information.
     */
    href?: string;
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
    phoneNumbers?: string[];
    /**
     * The star rating (or star-equivalent rating)
     */
    starRating: number;
    /**
     * The timezone the hotel is in - e.g AST
     */
    timezone?: string;
}
