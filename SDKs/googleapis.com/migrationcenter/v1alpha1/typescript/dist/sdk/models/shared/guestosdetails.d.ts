import { SpeakeasyBase } from "../../../internal/utils";
import { GuestConfigDetails } from "./guestconfigdetails";
import { GuestRuntimeDetails } from "./guestruntimedetails";
/**
 * Information from Guest-level collections.
 */
export declare class GuestOsDetails extends SpeakeasyBase {
    /**
     * Guest OS config information.
     */
    config?: GuestConfigDetails;
    /**
     * Guest OS runtime information.
     */
    runtime?: GuestRuntimeDetails;
}
