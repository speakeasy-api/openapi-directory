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
     * The phone number of the business.
     */
    phoneNumber?: string;
}
