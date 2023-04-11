import { SpeakeasyBase } from "../../../internal/utils";
import { Amenity } from "./amenity";
import { Image } from "./image";
import { Rate } from "./rate";
/**
 * Bookable category of bookable rooms within a hotel
 */
export declare class RoomType extends SpeakeasyBase {
    amenities: Amenity[];
    /**
     * Description
     */
    description: string;
    /**
     * Lists photos of this room type
     */
    images: Image[];
    /**
     * Maximum number of adults that can occupy the room.
     */
    maxOccupancy: number;
    /**
     * Name
     */
    name: string;
    /**
     * Bookable rates for this room type and the start and end dates of your availability search.
     */
    rates?: Rate[];
    /**
     * Unique identifier of the room type within the Impala platform.
     */
    roomTypeId: string;
}
