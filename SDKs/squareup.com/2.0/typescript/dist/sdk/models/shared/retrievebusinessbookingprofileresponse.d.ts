import { SpeakeasyBase } from "../../../internal/utils";
import { BusinessBookingProfile } from "./businessbookingprofile";
import { ErrorT } from "./error";
/**
 * Success
 */
export declare class RetrieveBusinessBookingProfileResponse extends SpeakeasyBase {
    businessBookingProfile?: BusinessBookingProfile;
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
}
