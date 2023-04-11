import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>All properties are optional</p>
 *
 * @remarks
 * <p>Only provided properties will be updated</p>
 * <p>Use null to null out a property that is allowed to be nullable</p>
 *
 */
export declare class PayeeUserSelfUpdateRequest extends SpeakeasyBase {
    /**
     * the email address of the user
     */
    email?: string;
    firstName?: string;
    lastName?: string;
    /**
     * The main contact number for the user
     *
     * @remarks
     *
     */
    primaryContactNumber?: string;
    /**
     * The secondary contact number for the user
     *
     * @remarks
     *
     */
    secondaryContactNumber?: string;
    /**
     * The phone number of a device that the user can receive sms messages on
     *
     * @remarks
     *
     */
    smsNumber?: string;
}
