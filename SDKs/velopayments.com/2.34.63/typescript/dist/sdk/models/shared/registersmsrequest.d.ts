import { SpeakeasyBase } from "../../../internal/utils";
/**
 * a SMS Number to send an OTP to
 */
export declare class RegisterSmsRequest extends SpeakeasyBase {
    /**
     * The phone number of a device that the user can receive sms messages on
     *
     * @remarks
     *
     */
    smsNumber: string;
}
