import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Return shipping label for a Buy on Google merchant-managed return.
 */
export declare class ReturnShippingLabel extends SpeakeasyBase {
    /**
     * Name of the carrier.
     */
    carrier?: string;
    /**
     * The URL for the return shipping label in PDF format
     */
    labelUri?: string;
    /**
     * The tracking id of this return label.
     */
    trackingId?: string;
}
