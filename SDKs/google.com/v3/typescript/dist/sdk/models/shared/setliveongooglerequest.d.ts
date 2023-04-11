import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for HotelService.SetLiveOnGoogle.
 */
export declare class SetLiveOnGoogleRequest extends SpeakeasyBase {
    /**
     * Required. Whether the property will show on Google. When true, Google will show the properties if their integration is complete and the property is available. When false, Google will never show the properties.
     */
    liveOnGoogle?: boolean;
    /**
     * Required. Identifies the properties to update with the liveOnGoogle setting.
     */
    partnerHotelIds?: string[];
}
