import { SpeakeasyBase } from "../../../internal/utils";
import { AccountActivity } from "./accountactivity";
/**
 * Required. Details about the licensing status of the user for the app in the scope.
 */
export declare enum AccountDetailsAppLicensingVerdictEnum {
    Unknown = "UNKNOWN",
    Licensed = "LICENSED",
    Unlicensed = "UNLICENSED",
    Unevaluated = "UNEVALUATED"
}
/**
 * Contains the account information such as the licensing status for the user in the scope.
 */
export declare class AccountDetails extends SpeakeasyBase {
    /**
     * Contains a signal helping apps differentiating between likely genuine users and likely non-genuine traffic (such as accounts being used for fraud, accounts used by automated traffic, or accounts used in device farms) based on the presence and volume of Play store activity.
     */
    accountActivity?: AccountActivity;
    /**
     * Required. Details about the licensing status of the user for the app in the scope.
     */
    appLicensingVerdict?: AccountDetailsAppLicensingVerdictEnum;
}
