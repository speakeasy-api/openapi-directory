import { SpeakeasyBase } from "../../../internal/utils";
import { Availability } from "./availability";
/**
 * The response to a update availability request.
 */
export declare class UpdateAvailabilityResponse extends SpeakeasyBase {
    /**
     * The availabilities being returned.
     */
    availabilities?: Availability[];
}
