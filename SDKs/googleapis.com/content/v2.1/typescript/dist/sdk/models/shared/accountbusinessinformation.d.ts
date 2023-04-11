import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAddress } from "./accountaddress";
import { AccountCustomerService } from "./accountcustomerservice";
export declare class AccountBusinessInformation extends SpeakeasyBase {
    address?: AccountAddress;
    customerService?: AccountCustomerService;
    /**
     * The 10-digit [Korean business registration number](https://support.google.com/merchants/answer/9037766) separated with dashes in the format: XXX-XX-XXXXX. This field will only be updated if explicitly set.
     */
    koreanBusinessRegistrationNumber?: string;
    /**
     * The phone number of the business in [E.164](https://en.wikipedia.org/wiki/E.164) format. This can only be updated if a verified phone number is not already set. To replace a verified phone number use the `Accounts.requestphoneverification` and `Accounts.verifyphonenumber`.
     */
    phoneNumber?: string;
    /**
     * Verification status of the phone number of the business. This status is read only and can be updated only by successful phone verification. Acceptable values are: - "`verified`" - "`unverified`"
     */
    phoneVerificationStatus?: string;
}
