import { SpeakeasyBase } from "../../../internal/utils";
import { ContactDetails } from "./contactdetails";
import { PickupWindow } from "./pickupwindow";
/**
 * The information necessary to schedule a package pickup
 *
 * @remarks
 *
 */
export declare class SchedulePickupRequestBodyInput extends SpeakeasyBase {
    contactDetails: ContactDetails;
    /**
     * Label IDs that will be included in the pickup request
     */
    labelIds: string[];
    /**
     * Used by some carriers to give special instructions for a package pickup
     */
    pickupNotes?: string;
    /**
     * The desired time range for the package pickup.
     */
    pickupWindow: PickupWindow;
}
