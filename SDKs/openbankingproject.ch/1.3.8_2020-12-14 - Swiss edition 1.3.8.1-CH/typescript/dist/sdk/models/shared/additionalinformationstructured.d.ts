import { SpeakeasyBase } from "../../../internal/utils";
import { StandingOrderDetails } from "./standingorderdetails";
/**
 * Is used if and only if the bookingStatus entry equals "information".
 *
 * @remarks
 * Every active standing order related to the dedicated payment account result into one entry.
 *
 */
export declare class AdditionalInformationStructured extends SpeakeasyBase {
    /**
     * Details of underlying standing orders.
     *
     * @remarks
     *
     */
    standingOrderDetails: StandingOrderDetails;
}
