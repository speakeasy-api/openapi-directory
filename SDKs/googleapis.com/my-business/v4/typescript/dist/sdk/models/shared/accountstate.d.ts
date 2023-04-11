import { SpeakeasyBase } from "../../../internal/utils";
/**
 * If verified, future locations that are created are automatically connected to Google Maps, and have Google+ pages created, without requiring moderation.
 */
export declare enum AccountStateStatusEnum {
    AccountStatusUnspecified = "ACCOUNT_STATUS_UNSPECIFIED",
    Verified = "VERIFIED",
    Unverified = "UNVERIFIED",
    VerificationRequested = "VERIFICATION_REQUESTED"
}
/**
 * Indicates status of the account, such as whether the account has been verified by Google.
 */
export declare class AccountState extends SpeakeasyBase {
    /**
     * If verified, future locations that are created are automatically connected to Google Maps, and have Google+ pages created, without requiring moderation.
     */
    status?: AccountStateStatusEnum;
}
