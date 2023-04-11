import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message for HotelService.SetLiveOnGoogle.
 */
export declare class SetLiveOnGoogleResponse extends SpeakeasyBase {
    /**
     * Identifies properties that Google could not update.
     */
    failedHotelIds?: string[];
    /**
     * Identifies the updated properties.
     */
    updatedHotelIds?: string[];
}
