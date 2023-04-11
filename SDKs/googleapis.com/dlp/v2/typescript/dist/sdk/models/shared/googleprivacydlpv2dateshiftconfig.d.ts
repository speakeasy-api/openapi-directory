import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2CryptoKey } from "./googleprivacydlpv2cryptokey";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
/**
 * Shifts dates by random number of days, with option to be consistent for the same context. See https://cloud.google.com/dlp/docs/concepts-date-shifting to learn more.
 */
export declare class GooglePrivacyDlpV2DateShiftConfig extends SpeakeasyBase {
    /**
     * General identifier of a data field in a storage service.
     */
    context?: GooglePrivacyDlpV2FieldId;
    /**
     * This is a data encryption key (DEK) (as opposed to a key encryption key (KEK) stored by Cloud Key Management Service (Cloud KMS). When using Cloud KMS to wrap or unwrap a DEK, be sure to set an appropriate IAM policy on the KEK to ensure an attacker cannot unwrap the DEK.
     */
    cryptoKey?: GooglePrivacyDlpV2CryptoKey;
    /**
     * Required. For example, -5 means shift date to at most 5 days back in the past.
     */
    lowerBoundDays?: number;
    /**
     * Required. Range of shift in days. Actual shift will be selected at random within this range (inclusive ends). Negative means shift to earlier in time. Must not be more than 365250 days (1000 years) each direction. For example, 3 means shift date to at most 3 days into the future.
     */
    upperBoundDays?: number;
}
