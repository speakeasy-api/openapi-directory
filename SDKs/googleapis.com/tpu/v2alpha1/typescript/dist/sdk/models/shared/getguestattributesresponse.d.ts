import { SpeakeasyBase } from "../../../internal/utils";
import { GuestAttributes } from "./guestattributes";
/**
 * Response for GetGuestAttributes.
 */
export declare class GetGuestAttributesResponse extends SpeakeasyBase {
    /**
     * The guest attributes for the TPU workers.
     */
    guestAttributes?: GuestAttributes[];
}
