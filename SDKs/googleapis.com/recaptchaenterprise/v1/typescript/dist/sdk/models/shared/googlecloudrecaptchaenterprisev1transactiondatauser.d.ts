import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about a user's account involved in the transaction.
 */
export declare class GoogleCloudRecaptchaenterpriseV1TransactionDataUser extends SpeakeasyBase {
    /**
     * Unique account identifier for this user. If using account defender, this should match the hashed_account_id field. Otherwise, a unique and persistent identifier for this account.
     */
    accountId?: string;
    /**
     * The epoch milliseconds of the user's account creation.
     */
    creationMs?: string;
    /**
     * The email address of the user.
     */
    email?: string;
    /**
     * Whether the email has been verified to be accessible by the user (OTP or similar).
     */
    emailVerified?: boolean;
    /**
     * The phone number of the user, with country code.
     */
    phoneNumber?: string;
    /**
     * Whether the phone number has been verified to be accessible by the user (OTP or similar).
     */
    phoneVerified?: boolean;
}
