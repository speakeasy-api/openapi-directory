import { SpeakeasyBase } from "../../../internal/utils";
export declare class TransmissionTypes2 extends SpeakeasyBase {
    /**
     * Whether the Payor is allowed to pay via ACH
     */
    ach: boolean;
    /**
     * Whether the Payor is allowed to pay via same day ACH
     */
    sameDayAch: boolean;
    /**
     * Whether the Payor is allowed to pay via wire
     */
    wire: boolean;
}
