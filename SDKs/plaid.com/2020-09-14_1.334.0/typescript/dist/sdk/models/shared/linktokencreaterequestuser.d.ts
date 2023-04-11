import { SpeakeasyBase } from "../../../internal/utils";
import { UserAddress } from "./useraddress";
import { UserIDNumber } from "./useridnumber";
import { UserName } from "./username";
/**
 * An object specifying information about the end user who will be linking their account.
 */
export declare class LinkTokenCreateRequestUser extends SpeakeasyBase {
    /**
     * Home address for the user.
     */
    address?: UserAddress;
    /**
     * A unique ID representing the end user. Typically this will be a user ID number from your application. Personally identifiable information, such as an email address or phone number, should not be used in the `client_user_id`. It is currently used as a means of searching logs for the given user in the Plaid Dashboard.
     */
    clientUserId: string;
    /**
     * To be provided in the format "yyyy-mm-dd". Not currently used.
     */
    dateOfBirth?: Date;
    /**
     * The user's email address. This field is optional, but required to enable the [pre-authenticated returning user flow](https://plaid.com/docs/link/returning-user/#pre-authenticated-rux).
     */
    emailAddress?: string;
    /**
     * The date and time the email address was verified in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DDThh:mm:ssZ`). This was previously an optional field used in the [returning user experience](https://plaid.com/docs/link/returning-user). This field is no longer required to enable the returning user experience.
     *
     * @remarks
     *
     *  Only pass a verification time for an email address that you have verified. If you have performed verification but don’t have the time, you may supply a signal value of the start of the UNIX epoch.
     *
     *  Example: `2020-01-01T00:00:00Z`
     */
    emailAddressVerifiedTime?: Date;
    /**
     * ID number submitted by the user, currently used only for the Identity Verification product. If the user has not submitted this data yet, this field will be `null`. Otherwise, both fields are guaranteed to be filled.
     */
    idNumber?: UserIDNumber;
    /**
     * The user's full legal name, used for [micro-deposit based verification flows](https://plaid.com/docs/auth/coverage/). For a small number of customers on legacy flows, providing this field is required to enable micro-deposit-based flows. For all other customers, this field is optional, but providing the user's name in this field when using micro-deposit-based verification will enable certain risk checks and can reduce micro-deposit fraud.
     */
    legalName?: string;
    name?: UserName;
    /**
     * The user's phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format. This field is optional, but required to enable the [returning user experience](https://plaid.com/docs/link/returning-user).
     */
    phoneNumber?: string;
    /**
     * The date and time the phone number was verified in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DDThh:mm:ssZ`). This was previously an optional field used in the [returning user experience](https://plaid.com/docs/link/returning-user). This field is no longer required to enable the returning user experience.
     *
     * @remarks
     *
     *  Only pass a verification time for a phone number that you have verified. If you have performed verification but don’t have the time, you may supply a signal value of the start of the UNIX epoch.
     *
     *  Example: `2020-01-01T00:00:00Z`
     *
     */
    phoneNumberVerifiedTime?: Date;
    /**
     * To be provided in the format "ddd-dd-dddd". Not currently used.
     */
    ssn?: string;
}
