import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Rules that will get applied when creating or updating a payment channel for the given country
 */
export declare class PaymentChannelRule extends SpeakeasyBase {
    /**
     * User friendly name
     */
    displayName: string;
    displayOrder?: number;
    /**
     * <p>the rule element</p>
     *
     * @remarks
     * <p>will match a given element name for a payment channel configuration
     *
     */
    element: string;
    /**
     * maximum length of the element data
     */
    maxLength?: number;
    /**
     * mininum length of the element data
     */
    minLength?: number;
    /**
     * is this element required
     */
    required: boolean;
    /**
     * a regex to validate the element data
     */
    validation: string;
}
