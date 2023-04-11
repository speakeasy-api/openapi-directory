import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityInputModel } from "./availabilityinputmodel";
/**
 * Input model for the calendar object
 */
export declare class ScheduleUpdateModel extends SpeakeasyBase {
    availability?: AvailabilityInputModel;
    bookingsPerSlot?: number;
    interval?: number;
    locationId?: string;
    name?: string;
    resourceGroupId?: string;
    type?: string;
}
