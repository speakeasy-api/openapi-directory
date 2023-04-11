import { SpeakeasyBase } from "../../../internal/utils";
import { RatesPerDate } from "./ratesperdate";
export declare class RatePlanRoomType extends SpeakeasyBase {
    /**
     * A list of future dates and their rate prices for this rate plan and room type.
     */
    dates: RatesPerDate[];
    /**
     * Number of adults that the room can accommodate.
     */
    maxOccupancy: number;
    /**
     * Formatted room type name.
     */
    name: string;
    /**
     * Unique identifier of this room type.
     */
    roomTypeId: string;
}
