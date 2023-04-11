import { SpeakeasyBase } from "../../../internal/utils";
import { MFATypeEnum } from "./mfatypeenum";
/**
 * <p>All properties are optional</p>
 *
 * @remarks
 * <p>Only provided properties will be updated</p>
 * <p>Use null to null out a property that is allowed to be nullable</p>
 *
 */
export declare class UserDetailsUpdateRequest extends SpeakeasyBase {
    /**
     * the email address of the user
     */
    email?: string;
    firstName?: string;
    lastName?: string;
    /**
     * The type of the MFA device
     */
    mfaType?: MFATypeEnum;
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
    /**
     * <p>Optional property that MUST be suppied when manually verifying a user</p>
     *
     * @remarks
     * <p>The user's smsNumber is registered via a separate endpoint and an OTP sent to them</p>
     *
     */
    verificationCode?: string;
}
