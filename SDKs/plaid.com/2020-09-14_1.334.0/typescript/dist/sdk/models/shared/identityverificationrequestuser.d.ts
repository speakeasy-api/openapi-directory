import { SpeakeasyBase } from "../../../internal/utils";
import { UserAddress } from "./useraddress";
import { UserIDNumber } from "./useridnumber";
import { UserName } from "./username";
/**
 * User information collected outside of Link, most likely via your own onboarding process.
 *
 * @remarks
 *
 * Each of the following identity fields are optional:
 *
 * `email_address`
 *
 * `phone_number`
 *
 * `date_of_birth`
 *
 * `name`
 *
 * `address`
 *
 * `id_number`
 *
 * Specifically, these fields are optional in that they can either be fully provided (satisfying every required field in their subschema) or omitted from the request entirely by not providing the key or value.
 * Providing these fields via the API will result in Link skipping the data collection process for the associated user. All verification steps enabled in the associated Identity Verification Template will still be run. Verification steps will either be run immediately, or once the user completes the `accept_tos` step, depending on the value provided to the `gave_consent` field.
 */
export declare class IdentityVerificationRequestUser extends SpeakeasyBase {
    /**
     * Home address for the user.
     */
    address?: UserAddress;
    /**
     * An identifier to help you connect this object to your internal systems. For example, your database ID corresponding to this object.
     */
    clientUserId: string;
    /**
     * A date in the format YYYY-MM-DD (RFC 3339 Section 5.6).
     */
    dateOfBirth?: Date;
    /**
     * A valid email address.
     */
    emailAddress?: string;
    /**
     * ID number submitted by the user, currently used only for the Identity Verification product. If the user has not submitted this data yet, this field will be `null`. Otherwise, both fields are guaranteed to be filled.
     */
    idNumber?: UserIDNumber;
    /**
     * The full name provided by the user. If the user has not submitted their name, this field will be null. Otherwise, both fields are guaranteed to be filled.
     */
    name?: UserName;
    /**
     * A phone number in E.164 format.
     */
    phoneNumber?: string;
}
